const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Women = require("../models/women.js");
const Men = require("../models/men.js");
const Boy = require("../models/boy.js");

// Boy clothes main route
router.get("/", async (req, res) => {
    req.flash("success", "Welcome to Boys StyleZen");
    res.render("clothes/boy.ejs");
});

// View all
router.get("/viewall", async (req, res) => {
    try {
        const allListing = await Boy.find({});
        res.render("clothes/displayBoy.ejs", { allListing, category: "All" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' clothing!");
        res.redirect("/StyleZen/boy");
    }
});

// Jeans category route
router.get("/jean", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Jeans" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Jeans" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' jeans!");
        res.redirect("/StyleZen/boy");
    }
});

// T-shirt category route
router.get("/tee", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "T-shirt" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "T-shirt" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' t-shirts!");
        res.redirect("/StyleZen/boy");
    }
});

// Shirt category route
router.get("/shirt", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Shirt" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Shirt" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' shirts!");
        res.redirect("/StyleZen/boy");
    }
});

// Footwear category route
router.get("/footwear", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Footwear" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Footwear" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' footwear!");
        res.redirect("/StyleZen/boy");
    }
});

// Accessory category route
router.get("/accessory", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Accessory" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Accessory" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' accessories!");
        res.redirect("/StyleZen/boy");
    }
});

// Bag category route
router.get("/bag", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Bag" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Bag" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' bags!");
        res.redirect("/StyleZen/boy");
    }
});

// Jacket category route
router.get("/jacket", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Jacket" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Jacket" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' jackets!");
        res.redirect("/StyleZen/boy");
    }
});

// Cap category route
router.get("/cap", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Cap" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Cap" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' caps!");
        res.redirect("/StyleZen/boy");
    }
});

// Watch category route
router.get("/watch", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Watch" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Watch" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' watches!");
        res.redirect("/StyleZen/boy");
    }
});

// Activewear category route
router.get("/activewear", async (req, res) => {
    try {
        const allListing = await Boy.find({ category: "Activewear" });
        res.render("clothes/displayBoy.ejs", { allListing, category: "Activewear" });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot display boys' activewear!");
        res.redirect("/StyleZen/boy");
    }
});

// Single product display route
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Boy.findById(id);
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/StyleZen/boy");
        }
        res.render("clothes/display.ejs", { listing });
    } catch (err) {
        console.error(err);
        req.flash("error", "Cannot find that product!");
        res.redirect("/StyleZen/boy");
    }
});

// Filter route
router.get("/:category/filter", async (req, res) => {
    try {
        let { category } = req.params;
        let { colors, brand, offer, priceRange, deliveryTime } = req.query;
        let filter = { category: category };

        // Handling colors filter
        if (colors) {
            if (!Array.isArray(colors)) colors = [colors];
            filter.color = { $in: colors };
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
        let allListing = await Boy.find(filter);
        console.log("Filtered Listings Count:", allListing.length);

        res.render("clothes/displayBoy.ejs", { allListing, category });
    } catch (error) {
        console.error("Error in filter:", error);
        req.flash("error", "Something went wrong while filtering!");
        res.redirect("/StyleZen/boy");
    }
});

module.exports = router;