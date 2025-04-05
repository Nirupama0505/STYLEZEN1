const kidGirlListings = [
    // Girls Jeans
    {
        Brand: "Levi's Kids",
        description: "Girls Slim Fit Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,jeans",
          filename: "kids-jeans"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Gap Kids",
        description: "Girls Stretchy Denim Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,denim",
          filename: "kids-denim"
        },
        price: 799,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "15% Off",
        color: "Light Blue"
    },
    {
        Brand: "H&M Kids",
        description: "Girls Stretch Denim Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,pants",
          filename: "kids-pants"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "20% Off",
        color: "Dark Blue"
    },
    {
        Brand: "Zara Kids",
        description: "Girls Embroidered Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,jeans",
          filename: "girl-jeans"
        },
        price: 999,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "10% Off",
        color: "Medium Blue"
    },
    {
        Brand: "Justice",
        description: "Girls Floral Embellished Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,pants",
          filename: "girl-pants"
        },
        price: 1199,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "15% Off",
        color: "Blue"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Jeggings",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,jeggings",
          filename: "kids-jeggings"
        },
        price: 749,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "20% Off",
        color: "Black"
    },
    {
        Brand: "Oshkosh B'gosh",
        description: "Girls Denim Overalls",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,overalls",
          filename: "girl-overalls"
        },
        price: 1099,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Gymboree",
        description: "Girls Sequin Pocket Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,denim",
          filename: "girl-denim"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "15% Off",
        color: "Light Wash"
    },
    {
        Brand: "Old Navy Kids",
        description: "Girls Ballerina Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,fashion",
          filename: "kids-fashion"
        },
        price: 799,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "20% Off",
        color: "Pink"
    },
    {
        Brand: "Carter's",
        description: "Girls Pull-On Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,clothes",
          filename: "girl-clothes"
        },
        price: 699,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Girl",
        offer: "10% Off",
        color: "Medium Wash"
    },
    
    // Girls T-shirts
    {
        Brand: "Nike Kids",
        description: "Girls Graphic T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,tshirt",
          filename: "girl-tshirt"
        },
        price: 499,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Adidas Kids",
        description: "Girls Athletic T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,tshirt",
          filename: "kids-tshirt"
        },
        price: 399,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "15% Off",
        color: "Purple"
    },
    {
        Brand: "Puma Kids",
        description: "Girls Performance T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,top",
          filename: "girl-top"
        },
        price: 349,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "20% Off",
        color: "White"
    },
    {
        Brand: "Gap Kids",
        description: "Girls Logo T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,top",
          filename: "kids-top"
        },
        price: 299,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Yellow"
    },
    {
        Brand: "H&M Kids",
        description: "Girls Sequin T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,sequin",
          filename: "girl-sequin"
        },
        price: 349,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "15% Off",
        color: "Pink"
    },
    {
        Brand: "Disney",
        description: "Girls Princess T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?disney,girl",
          filename: "disney-girl"
        },
        price: 399,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Carter's",
        description: "Girls Glitter T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,glitter",
          filename: "girl-glitter"
        },
        price: 299,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Purple"
    },
    {
        Brand: "Old Navy Kids",
        description: "Girls Striped T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,striped",
          filename: "girl-striped"
        },
        price: 349,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "15% Off",
        color: "Multicolor"
    },
    {
        Brand: "Justice",
        description: "Girls Emoji T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,emoji",
          filename: "girl-emoji"
        },
        price: 399,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "20% Off",
        color: "Black"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Unicorn T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?unicorn,shirt",
          filename: "unicorn-shirt"
        },
        price: 349,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    
    // Girls Dresses
    {
        Brand: "Zara Kids",
        description: "Girls Floral Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,dress",
          filename: "girl-dress"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "10% Off",
        color: "Floral"
    },
    {
        Brand: "H&M Kids",
        description: "Girls Party Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,party",
          filename: "girl-party"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "15% Off",
        color: "Pink"
    },
    {
        Brand: "Gap Kids",
        description: "Girls Denim Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,denim,dress",
          filename: "girl-denim-dress"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Carter's",
        description: "Girls Polka Dot Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?polka,dot,dress",
          filename: "polka-dot-dress"
        },
        price: 749,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "10% Off",
        color: "Red"
    },
    {
        Brand: "Disney",
        description: "Girls Princess Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?princess,dress",
          filename: "princess-dress"
        },
        price: 1299,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "15% Off",
        color: "Blue"
    },
    {
        Brand: "Old Navy Kids",
        description: "Girls Striped Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?striped,dress",
          filename: "striped-dress"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "20% Off",
        color: "Navy"
    },
    {
        Brand: "Justice",
        description: "Girls Sparkle Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?sparkle,dress",
          filename: "sparkle-dress"
        },
        price: 1199,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "10% Off",
        color: "Purple"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Casual Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?casual,dress",
          filename: "casual-dress"
        },
        price: 599,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "15% Off",
        color: "Green"
    },
    {
        Brand: "Gymboree",
        description: "Girls Floral Maxi Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?maxi,dress",
          filename: "maxi-dress"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "20% Off",
        color: "Floral"
    },
    {
        Brand: "Carters",
        description: "Girls Summer Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?summer,dress",
          filename: "summer-dress"
        },
        price: 699,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Dress",
        gender: "Girl",
        offer: "10% Off",
        color: "Yellow"
    },
    
    // Girls Footwear
    {
        Brand: "Nike Kids",
        description: "Girls Running Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,shoes",
          filename: "girl-shoes"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Adidas Kids",
        description: "Girls Sandals",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,sandals",
          filename: "girl-sandals"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "15% Off",
        color: "Purple"
    },
    {
        Brand: "Puma Kids",
        description: "Girls Sneakers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,sneakers",
          filename: "girl-sneakers"
        },
        price: 1199,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "20% Off",
        color: "White"
    },
    {
        Brand: "Crocs",
        description: "Girls Clogs",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,clogs",
          filename: "girl-clogs"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Disney",
        description: "Girls Princess Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?princess,shoes",
          filename: "princess-shoes"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "15% Off",
        color: "Blue"
    },
    {
        Brand: "Sketchers",
        description: "Girls Light-Up Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?light,up,shoes",
          filename: "light-up-shoes"
        },
        price: 1499,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "20% Off",
        color: "Multicolor"
    },
    {
        Brand: "Converse",
        description: "Girls Canvas Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?canvas,shoes",
          filename: "canvas-shoes"
        },
        price: 1099,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "10% Off",
        color: "Purple"
    },
    {
        Brand: "Reebok Kids",
        description: "Girls Athletic Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?athletic,shoes",
          filename: "athletic-shoes"
        },
        price: 1399,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Justice",
        description: "Girls Ballet Flats",
        image: {
          url: "https://source.unsplash.com/random/900×700/?ballet,flats",
          filename: "ballet-flats"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "20% Off",
        color: "Pink"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Casual Loafers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,loafers",
          filename: "girl-loafers"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Girl",
        offer: "10% Off",
        color: "Brown"
    },
    
    // Girls Accessories
    {
        Brand: "Claire's",
        description: "Girls Hair Accessories Set",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,hair,accessories",
          filename: "girl-hair-accessories"
        },
        price: 499,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "10% Off",
        color: "Multicolor"
    },
    {
        Brand: "Justice",
        description: "Girls Jewelry Set",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,jewelry",
          filename: "girl-jewelry"
        },
        price: 599,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "15% Off",
        color: "Pink"
    },
    {
        Brand: "Disney",
        description: "Girls Princess Tiara",
        image: {
          url: "https://source.unsplash.com/random/900×700/?princess,tiara",
          filename: "princess-tiara"
        },
        price: 399,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "20% Off",
        color: "Silver"
    },
    {
        Brand: "Carters",
        description: "Girls Headband Set",
        image: {
          url: "https://source.unsplash.com/random/900×700/?headband,girl",
          filename: "headband-girl"
        },
        price: 349,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "10% Off",
        color: "Multicolor"
    },
    {
        Brand: "H&M Kids",
        description: "Girls Hair Clips",
        image: {
          url: "https://source.unsplash.com/random/900×700/?hair,clips",
          filename: "hair-clips"
        },
        price: 249,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "15% Off",
        color: "Multicolor"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Scrunchie Set",
        image: {
          url: "https://source.unsplash.com/random/900×700/?scrunchie",
          filename: "scrunchie"
        },
        price: 299,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "20% Off",
        color: "Multicolor"
    },
    {
        Brand: "Frozen",
        description: "Girls Elsa Gloves",
        image: {
          url: "https://source.unsplash.com/random/900×700/?elsa,gloves",
          filename: "elsa-gloves"
        },
        price: 349,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Accessory",
        gender: "Girl",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Gap Kids",
        description: "Girls Winter Hat",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,winter,hat",
          filename: "girl-winter-hat"
        },
        price: 399,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Accessory",
        gender: "Girl",
        offer: "15% Off",
        color: "Pink"
    },
    {
        Brand: "Old Navy Kids",
        description: "Girls Sunglasses",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,sunglasses",
          filename: "girl-sunglasses"
        },
        price: 299,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "20% Off",
        color: "Pink"
    },
    {
        Brand: "Justice",
        description: "Girls Friendship Bracelet Set",
        image: {
          url: "https://source.unsplash.com/random/900×700/?friendship,bracelet",
          filename: "friendship-bracelet"
        },
        price: 249,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Girl",
        offer: "10% Off",
        color: "Multicolor"
    },
    
    // Girls Bags
    {
        Brand: "Disney",
        description: "Girls Princess Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?princess,backpack",
          filename: "princess-backpack"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Justice",
        description: "Girls Sequin Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?sequin,backpack",
          filename: "sequin-backpack"
        },
        price: 1199,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "15% Off",
        color: "Purple"
    },
    {
        Brand: "Frozen",
        description: "Girls Elsa Lunch Bag",
        image: {
          url: "https://source.unsplash.com/random/900×700/?lunch,bag",
          filename: "lunch-bag"
        },
        price: 599,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Jansport",
        description: "Girls Mini Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?mini,backpack",
          filename: "mini-backpack"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Unicorn Tote Bag",
        image: {
          url: "https://source.unsplash.com/random/900×700/?unicorn,tote",
          filename: "unicorn-tote"
        },
        price: 699,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "15% Off",
        color: "Purple"
    },
    {
        Brand: "Hello Kitty",
        description: "Girls Hello Kitty Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?hello,kitty",
          filename: "hello-kitty"
        },
        price: 999,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "20% Off",
        color: "Pink"
    },
    {
        Brand: "Nike Kids",
        description: "Girls Sports Duffel Bag",
        image: {
          url: "https://source.unsplash.com/random/900×700/?duffel,bag",
          filename: "duffel-bag"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "My Little Pony",
        description: "Girls Rainbow Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?rainbow,backpack",
          filename: "rainbow-backpack"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "15% Off",
        color: "Multicolor"
    },
    {
        Brand: "Gap Kids",
        description: "Girls Canvas Tote",
        image: {
          url: "https://source.unsplash.com/random/900×700/?canvas,tote",
          filename: "canvas-tote"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "20% Off",
        color: "White"
    },
    {
        Brand: "Barbie",
        description: "Girls Barbie Sling Bag",
        image: {
          url: "https://source.unsplash.com/random/900×700/?sling,bag",
          filename: "barbie-sling"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Bag",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    
    // Girls Skirts
    {
        Brand: "Zara Kids",
        description: "Girls Pleated Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?pleated,skirt",
          filename: "pleated-skirt"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Navy"
    },
    {
        Brand: "H&M Kids",
        description: "Girls Tutu Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?tutu,skirt",
          filename: "tutu-skirt"
        },
        price: 599,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "15% Off",
        color: "Pink"
    },
    {
        Brand: "Gap Kids",
        description: "Girls Denim Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?denim,skirt",
          filename: "denim-skirt"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Justice",
        description: "Girls Sequin Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?sequin,skirt",
          filename: "sequin-skirt"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Silver"
    },
    {
        Brand: "Old Navy Kids",
        description: "Girls Floral Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?floral,skirt",
          filename: "floral-skirt"
        },
        price: 599,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "15% Off",
        color: "Floral"
    },
    {
        Brand: "The Children's Place",
        description: "Girls Plaid Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?plaid,skirt",
          filename: "plaid-skirt"
        },
        price: 649,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "20% Off",
        color: "Plaid"
    },
    {
        Brand: "Carter's",
        description: "Girls Corduroy Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?corduroy,skirt",
          filename: "corduroy-skirt"
        },
        price: 699,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Brown"
    },
    {
        Brand: "Gymboree",
        description: "Girls Tiered Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?tiered,skirt",
          filename: "tiered-skirt"
        },
        price: 749,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "15% Off",
        color: "Purple"
    },
    {
        Brand: "Disney",
        description: "Girls Princess Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?princess,skirt",
          filename: "princess-skirt"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "20% Off",
        color: "Pink"
    },
    {
        Brand: "Oshkosh B'gosh",
        description: "Girls Knit Skirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?knit,skirt",
          filename: "knit-skirt"
        },
        price: 599,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Skirt",
        gender: "Girl",
        offer: "10% Off",
        color: "Gray"
    },
    
    // Girls Watches
    {
        Brand: "Timex Kids",
        description: "Girls Analog Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?girl,watch",
          filename: "girl-watch"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Disney",
        description: "Girls Princess Digital Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?digital,watch",
          filename: "digital-watch"
        },
        price: 799,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "15% Off",
        color: "Purple"
    },
    {
        Brand: "Frozen",
        description: "Girls Elsa Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?frozen,watch",
          filename: "frozen-watch"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Barbie",
        description: "Girls Barbie Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?barbie,watch",
          filename: "barbie-watch"
        },
        price: 599,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Casio Kids",
        description: "Girls Sports Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?sports,watch",
          filename: "sports-watch"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "15% Off",
        color: "White"
    },
    {
        Brand: "My Little Pony",
        description: "Girls Rainbow Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?rainbow,watch",
          filename: "rainbow-watch"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "20% Off",
        color: "Multicolor"
    },
    {
        Brand: "Hello Kitty",
        description: "Girls Character Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?character,watch",
          filename: "character-watch"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Flik Flak",
        description: "Girls Learning Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?learning,watch",
          filename: "learning-watch"
        },
        price: 1099,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "15% Off",
        color: "Yellow"
    },
    {
        Brand: "Justice",
        description: "Girls Glitter Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?glitter,watch",
          filename: "glitter-watch"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "20% Off",
        color: "Silver"
    },
    {
        Brand: "Shopkins",
        description: "Girls Character Digital Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?character,digital",
          filename: "character-digital"
        },
        price: 699,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Girl",
        offer: "10% Off",
        color: "Pink"
    }
];

const kidGirlData = kidGirlListings;

module.exports = { kidGirlData };
