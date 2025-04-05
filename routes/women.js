const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Women = require("../models/women.js");

//women clothes
router.get("/",async(req,res)=>{
    // let allListing =await Listing.find({  gender: 'Women',});
    // res.render("clothes/showall.ejs",{allListing}); 
    req.flash("success", "Welcome to Women StyleZen");
    res.render("clothes/women.ejs");
})
router.get("/viewall",async(req,res)=>{
    let allListing =await Women.find({});
    res.render("clothes/displayWomen.ejs",{allListing, category: "All"});
})
//jeans
router.get("/Jeans", async (req, res) => {
    let allListing = await Women.find({ category: "Jeans" });
    console.log(req.path);
    res.render("clothes/displayWomen.ejs", { allListing, category: "Jeans" });
});

//tee
router.get("/T-shirt",async(req,res)=>{
    let allListing =await Women.find({ category:'T-shirt'});
    res.render("clothes/displayWomen.ejs",{allListing,category:'T-shirt'});
})

//saree
router.get("/Saree",async(req,res)=>{
    let allListing =await Women.find({ category:'Saree'});
    res.render("clothes/displayWomen.ejs",{allListing,category:'Saree'});
})

//footwear
router.get("/Footwear",async(req,res)=>{
    let allListing =await Women.find({ category: 'Footwear',});
    res.render("clothes/displayWomen.ejs",{allListing,category: 'Footwear'});
})

//shirt
router.get("/Shirt",async(req,res)=>{
    let allListing =await Women.find({  category: 'Shirt',});
    res.render("clothes/displayWomen.ejs",{allListing,category:'Shirt'});
})

//accessory
router.get("/Accessory",async(req,res)=>{
    let allListing =await Women.find({  category: "Accessory"});
    res.render("clothes/displayWomen.ejs",{allListing , category: "Accessory"});
})
//bag
router.get("/Bag",async(req,res)=>{
    let allListing =await Women.find({  category: "Bag"});
    res.render("clothes/displayWomen.ejs",{allListing, category: "Bag"});
})

//dress
router.get("/Dress",async(req,res)=>{
    let allListing =await Women.find({  category: "Dress"});
    res.render("clothes/displayWomen.ejs",{allListing,category: "Dress"});
})

//category: "Kurti",
router.get("/Kurti",async(req,res)=>{
    let allListing =await Women.find({  category: "Kurti"});
    res.render("clothes/displayWomen.ejs",{allListing,category: "Kurti"});
})
//activewear
router.get("/Activewear",async(req,res)=>{
    let allListing =await Women.find({  category: "Activewear",});
    res.render("clothes/displayWomen.ejs",{allListing,category: "Activewear"});
})
//skirt
router.get("/Skirt",async(req,res)=>{
    let allListing =await Women.find({ category: "Skirt",});
    res.render("clothes/displayWomen.ejs",{allListing,category: "Skirt"});
})
router.get("/:category/filter", async (req, res) => {
    try {
        let { category } = req.params;
        let { colors, bodyType, brand, offer, priceRange, deliveryTime } = req.query;
        let filter = { category: category }; // Use category dynamically

        // Handling colors filter
        if (colors) {
            if (!Array.isArray(colors)) colors = [colors];
            filter.color = { $in: colors };
        }

        // Handling bodyType filter
        if (bodyType) {
            if (!Array.isArray(bodyType)) bodyType = [bodyType];
            filter.bodyType = { $in: bodyType };
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

        console.log("Applying Filter:", filter); // Log applied filters
        let allListing = await Women.find(filter);
        console.log("Filtered Listings Count:", allListing.length);

        res.render("clothes/displayWomen.ejs", { allListing, category });
    } catch (error) {
        console.error("Error fetching filtered results:", error);
        res.status(500).send("Server error");
    }
});

//show each product
router.get("/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Women.findById(id);
    if(!listing){
        req.flash("error","listing is not found");
        res.redirect("/StyleZen");
       }
       res.render("clothes/display.ejs",{listing});
})
module.exports = router;