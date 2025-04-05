const express = require("express");
const router = express.Router();
const Women = require("../models/women");
const Men = require("../models/men");
const Girl = require("../models/girl");
const Boy = require("../models/boy");
// const Kids = require("../models/kids");
const User = require("../models/user");
const { isLogged } = require("../middleware.js");

// View Cart
router.get("/", isLogged, async (req, res) => {
    try {
        let user = await User.findById(req.user._id);
        
        // If cart is empty or doesn't exist, show trending items
        if (!user.cart || user.cart.length === 0) {
            // Fetch trending items from both collections
            const trendingWomen = await Women.find({}).limit(3).populate("image");
            const trendingMen = await Men.find({}).limit(3).populate("image");
            const trendingItems = [...trendingWomen, ...trendingMen];
            
            return res.render("clothes/cart.ejs", { 
                cart: [], 
                isEmpty: true,
                trendingItems 
            });
        }
        
        // Fetch all cart items with their details
        const cartItems = await Promise.all(user.cart.map(async (cartItem) => {
            // Try to find in Women collection first
            let product = await Women.findById(cartItem.productId).populate("image");
            
            // If not found in Women, try Men collection
            if (!product) {
                product = await Men.findById(cartItem.productId).populate("image");
            }
            
            if (product) {
                return {
                    ...product.toObject(),
                    selectedSize: cartItem.size
                };
            }
            return null;
        }));
        
        // Filter out any null values
        const validCartItems = cartItems.filter(item => item !== null);
        
        // If no valid items found, show trending items
        if (validCartItems.length === 0) {
            // Clear the cart since all items are invalid
            user.cart = [];
            await user.save();
            
            // Fetch trending items from both collections
            const trendingWomen = await Women.find({}).limit(3).populate("image");
            const trendingMen = await Men.find({}).limit(3).populate("image");
            const trendingItems = [...trendingWomen, ...trendingMen];
            
            return res.render("clothes/cart.ejs", { 
                cart: [], 
                isEmpty: true,
                trendingItems 
            });
        }
        
        res.render("clothes/cart.ejs", { 
            cart: validCartItems,
            isEmpty: false
        });
    } catch (err) {
        console.error(err);
        req.flash("error", "Error loading cart");
        res.redirect("back");
    }
});

// Add to Cart (Find in any collection)
router.post("/add", isLogged, async (req, res) => {
    try {
        const { id, modelType, size } = req.body;
        
        // Check if size is selected
        if (!size) {
            req.flash("error", "Please select a size!");
            return res.redirect(req.get("Referrer") || "/StyleZen");
        }

        let product;

        // Search for product in both collections
        if (modelType === "Women") {
            product = await Women.findById(id).populate("image");
            if (!product) {
                product = await Men.findById(id).populate("image");
            }
        } else {
            product = await Men.findById(id).populate("image");
            if (!product) {
                product = await Women.findById(id).populate("image");
            }
        }

        if (!product) {
            req.flash("error", "Product not found!");
            return res.redirect(req.get("Referrer") || "/StyleZen");
        }

        let user = await User.findById(req.user._id);

        // Initialize cart if it doesn't exist
        if (!user.cart) {
            user.cart = [];
        }

        // Create cart item with size
        const cartItem = {
            productId: product._id,
            size: size
        };

        // Check if product is already in cart with same size
        const existingItemIndex = user.cart.findIndex(item => 
            item.productId.toString() === product._id.toString() && item.size === size
        );

        if (existingItemIndex === -1) {
            user.cart.push(cartItem);
            await user.save();
            req.flash("success", "Added to cart!");
            res.redirect("/StyleZen/cart");
        } else {
            req.flash("info", "Item already in cart!");
            res.redirect("/StyleZen/cart");
        }
    } catch (e) {
        console.log(e);
        req.flash("error", "Something went wrong!");
        res.redirect(req.get("Referrer") || "/StyleZen");
    }
});

// Remove from Cart
router.post("/:id/remove", isLogged, async (req, res) => {
    try {
        let user = await User.findById(req.user._id);
        
        // Filter out the item with matching productId
        user.cart = user.cart.filter(item => {
            if (!item || !item.productId) return true; // Keep valid items
            return item.productId.toString() !== req.params.id;
        });
        
        await user.save();
        req.flash("success", "Removed from cart!");
        res.redirect("/StyleZen/cart");
    } catch (e) {
        console.log(e);
        req.flash("error", "Something went wrong!");
        res.redirect("/StyleZen/cart");
    }
});

module.exports = router;
