const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Women = require("../models/women.js");
const Men = require("../models/men.js");
const Girl = require("../models/girl.js");

// Girl clothes main route
router.get("/", async (req, res) => {
    try {
        const allListing = await Girl.find({});
        res.render("clothes/girl.ejs", { allListing, category: "All" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' clothing!");
        res.redirect("/StyleZen");
    }
});

// View all
router.get("/viewall", async (req, res) => {
    try {
        const allListing = await Girl.find({});
        res.render("clothes/displayGirl.ejs", { allListing, category: "All" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' clothing!");
        res.redirect("/StyleZen/girl");
    }
});

// Jeans category route
router.get("/Jeans", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Jeans" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Jeans" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' jeans!");
        res.redirect("/StyleZen/girl");
    }
});

// T-shirt category route
router.get("/T-shirt", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "T-shirt" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "T-shirt" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' t-shirts!");
        res.redirect("/StyleZen/girl");
    }
});

// Dress category route
router.get("/Dress", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Dress" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Dress" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' dresses!");
        res.redirect("/StyleZen/girl");
    }
});

// Footwear category route
router.get("/Footwear", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Footwear" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Footwear" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' footwear!");
        res.redirect("/StyleZen/girl");
    }
});

// Accessory category route
router.get("/Accessory", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Accessory" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Accessory" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' accessories!");
        res.redirect("/StyleZen/girl");
    }
});

// Bag category route
router.get("/Bag", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Bag" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Bag" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' bags!");
        res.redirect("/StyleZen/girl");
    }
});

// Skirt category route
router.get("/Skirt", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Skirt" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Skirt" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' skirts!");
        res.redirect("/StyleZen/girl");
    }
});

// Watch category route
router.get("/Watch", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Watch" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Watch" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' watches!");
        res.redirect("/StyleZen/girl");
    }
});

// Shirt category route
router.get("/Shirt", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Shirt" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Shirt" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' shirts!");
        res.redirect("/StyleZen/girl");
    }
});

// Activewear category route
router.get("/Activewear", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Activewear" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Activewear" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' activewear!");
        res.redirect("/StyleZen/girl");
    }
});

// Kurti category route
router.get("/Kurti", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Kurti" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Kurti" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' kurtis!");
        res.redirect("/StyleZen/girl");
    }
});

// Saree category route
router.get("/Saree", async (req, res) => {
    try {
        const allListing = await Girl.find({ category: "Saree" });
        res.render("clothes/displayGirl.ejs", { allListing, category: "Saree" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display girls' sarees!");
        res.redirect("/StyleZen/girl");
    }
});

// Single product display route
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Girl.findById(id);
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/StyleZen/girl");
        }
        res.render("clothes/display.ejs", { listing });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot find that product!");
        res.redirect("/StyleZen/girl");
    }
});

// Filter route
router.get("/:category/filter", async (req, res) => {
    try {
        let { category } = req.params;
        let { colors, size, brand, offer, priceRange, deliveryTime } = req.query;
        let filter = { category: category };

        // Handling colors filter
        if (colors) {
            if (!Array.isArray(colors)) colors = [colors];
            filter.color = { $in: colors };
        }

        // Handling size filter
        if (size) {
            if (!Array.isArray(size)) size = [size];
            filter.size = { $in: size };
        }

        // Handling brand filter
        if (brand) {
            if (!Array.isArray(brand)) brand = [brand];
            filter.Brand = { $in: brand };
        }

        // Handling offer filter
        if (offer) {
            if (!Array.isArray(offer)) offer = [offer];
            filter.offer = { $in: offer };
        }

        // Handling price range filter
        if (priceRange) {
            if (!Array.isArray(priceRange)) priceRange = [priceRange];
            let priceFilters = priceRange.map(range => {
                const [min, max] = range.split('-').map(price => parseInt(price, 10));
                return { price: { $gte: min, $lte: max } };
            });
            filter.$or = priceFilters;
        }

        // Handling delivery time filter
        if (deliveryTime) {
            if (!Array.isArray(deliveryTime)) deliveryTime = [deliveryTime];
            let deliveryFilters = deliveryTime.map(time => ({ delivery: time }));
            filter.$or = deliveryFilters;
        }

        console.log("Applying Filter:", filter);
        let allListing = await Girl.find(filter);
        console.log("Filtered Listings Count:", allListing.length);

        res.render("clothes/displayGirl.ejs", { allListing, category });
    } catch (error) {
        console.error("Error in filter:", error);
        req.flash("error", "Something went wrong while filtering!");
        res.redirect("/StyleZen/girl");
    }
});

module.exports = router;