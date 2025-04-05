const express = require("express");
const router = express.Router();
const { isLogged } = require("../middleware");
const User = require("../models/user");
const Women = require("../models/women");
const Men = require("../models/men");

// View Wishlist
router.get("/", isLogged, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        
        if (!user.wishlist || user.wishlist.length === 0) {
            // Fetch trending items from both collections
            const trendingWomen = await Women.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .populate("image");
            
            const trendingMen = await Men.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .populate("image");
            
            const trendingItems = [...trendingWomen, ...trendingMen];
            
            return res.render("clothes/wishlist", { 
                items: [], 
                trendingItems,
                isEmpty: true 
            });
        }

        // Fetch all wishlist items
        const wishlistItems = await Promise.all(
            user.wishlist.map(async (item) => {
                let product;
                // Try to find product in Women collection
                product = await Women.findById(item.productId).populate("image");
                if (!product) {
                    // If not found in Women, try Men collection
                    product = await Men.findById(item.productId).populate("image");
                }
                if (product) {
                    // Add the size to the product object
                    product.size = item.size;
                }
                return product;
            })
        );

        // Filter out any null items
        const validItems = wishlistItems.filter(item => item !== null);

        if (validItems.length === 0) {
            // Fetch trending items from both collections
            const trendingWomen = await Women.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .populate("image");
            
            const trendingMen = await Men.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .populate("image");
            
            const trendingItems = [...trendingWomen, ...trendingMen];
            
            return res.render("clothes/wishlist", { 
                items: [], 
                trendingItems,
                isEmpty: true 
            });
        }

        res.render("clothes/wishlist", { 
            items: validItems,
            isEmpty: false 
        });
    } catch (e) {
        console.log(e);
        req.flash("error", "Something went wrong!");
        res.redirect("/StyleZen");
    }
});

// Add to Wishlist
router.post("/add", isLogged, async (req, res) => {
    try {
        const { id, modelType } = req.body;
        const user = req.user;

        // Find the product in the appropriate collection
        let product;
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

        // Check if product is already in wishlist
        const existingItem = user.wishlist.find(item => item.productId.toString() === product._id.toString());
        if (existingItem) {
            req.flash("error", "Product is already in your wishlist!");
            return res.redirect(req.get("Referrer") || "/StyleZen");
        }

        // Add to wishlist without size
        user.wishlist.push({
            productId: product._id,
            modelType: product.category === "Women" ? "Women" : "Men"
        });

        await user.save();
        req.flash("success", "Product added to wishlist!");
        res.redirect("/StyleZen/wishlist");
    } catch (e) {
        console.log(e);
        req.flash("error", "Something went wrong!");
        res.redirect(req.get("Referrer") || "/StyleZen");
    }
});

// Remove from Wishlist
router.post("/:id/remove", isLogged, async (req, res) => {
    try {
        let user = await User.findById(req.user._id);
        
        // Filter out the item with matching productId
        user.wishlist = user.wishlist.filter(item => {
            if (!item || !item.productId) return true; // Keep valid items
            return item.productId.toString() !== req.params.id;
        });
        
        await user.save();
        req.flash("success", "Removed from wishlist!");
        res.redirect("/StyleZen/wishlist");
    } catch (e) {
        console.log(e);
        req.flash("error", "Something went wrong!");
        res.redirect("/StyleZen/wishlist");
    }
});

module.exports = router; 