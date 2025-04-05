const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Women = require("../models/women.js");
const Men = require("../models/men.js");
//women clothes
router.get("/",async(req,res)=>{
    // let allListing =await Listing.find({  gender: 'Women',});
    // res.render("clothes/showall.ejs",{allListing}); 
    req.flash("success", "Welcome to Men StyleZen");
    res.render("clothes/men.ejs");
})


router.get("/viewall",async(req,res)=>{
    let allListing =await Men.find({});
    res.render("clothes/displayMen.ejs",{allListing, category: "All"});
})

//jeans
router.get("/jean",async(req,res)=>{
    let allListing =await Men.find({ category: 'Jeans',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Jeans"});
})

//tee
router.get("/tee",async(req,res)=>{
    let allListing =await Men.find({ category:'T-shirt'});
    res.render("clothes/displayMen.ejs",{allListing, category: "T-shirt"});
})

//saree
router.get("/accessory",async(req,res)=>{
    let allListing =await Men.find({ category: "Accessory"});
    res.render("clothes/displayMen.ejs",{allListing, category: "Accessory"});
})

//footwear
router.get("/footwear",async(req,res)=>{
    let allListing =await Men.find({ category: 'Footwear',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Footwear"});
})

//shirt
router.get("/shirt",async(req,res)=>{
    let allListing =await Men.find({  category: 'Shirt',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Shirt"});
})

//accessory
router.get("/accessory",async(req,res)=>{
    let allListing =await Men.find({  category: 'Accessory',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Accessory"});
})

//watch
router.get("/watch",async(req,res)=>{
    let allListing =await Men.find({  category: 'Watch',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Watch"});
})

//bag
router.get("/bag",async(req,res)=>{
    let allListing =await Men.find({  category: 'Bag',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Bag"});
})

//jacket
router.get("/jacket",async(req,res)=>{
    let allListing =await Men.find({  category: 'Jacket',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Jacket"});
})

//kurti
router.get("/kurti",async(req,res)=>{
    let allListing =await Men.find({  category: 'Kurti',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Kurti"});
})

//activewear
router.get("/activewear",async(req,res)=>{
    let allListing =await Men.find({  category: 'Activewear',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Activewear"});
})

//cap
router.get("/cap",async(req,res)=>{
    let allListing =await Men.find({  category: 'Cap',});
    res.render("clothes/displayMen.ejs",{allListing, category: "Cap"});
})

//show each product
router.get("/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Men.findById(id);
    if(!listing){
        req.flash("error","listing is not found");
        return res.redirect("/StyleZen/men");
       }
       res.render("clothes/display.ejs",{listing});
})

// Filter routes
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
        let allListing = await Men.find(filter);
        console.log("Filtered Listings Count:", allListing.length);

        res.render("clothes/displayMen.ejs", { allListing, category });
    } catch (error) {
        console.error("Error in filter:", error);
        req.flash("error", "Something went wrong while filtering!");
        res.redirect("/StyleZen/men");
    }
});

module.exports = router;