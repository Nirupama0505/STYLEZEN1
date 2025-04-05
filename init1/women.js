const womenListings = [
    // Women Tops
    {
        Brand: "H&M",
        description: "Women's Casual Cotton Top",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,top",
          filename: "women-top"
        },
        price: 499,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Top",
        gender: "Women",
        offer: "10% Off",
        color: "White"
    },
    {
        Brand: "Zara",
        description: "Women's Formal Blouse",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,blouse",
          filename: "women-blouse"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Top",
        gender: "Women",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Forever 21",
        description: "Women's Printed Casual Top",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,printed,top",
          filename: "women-printed-top"
        },
        price: 599,
        delivery: "4-5 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Top",
        gender: "Women",
        offer: "20% Off",
        color: "Multicolor"
    },
    {
        Brand: "Mango",
        description: "Women's Sleeveless Top",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,sleeveless",
          filename: "women-sleeveless"
        },
        price: 699,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Top",
        gender: "Women",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Vero Moda",
        description: "Women's Lace Trim Top",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,lace,top",
          filename: "women-lace-top"
        },
        price: 799,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Top",
        gender: "Women",
        offer: "15% Off",
        color: "Blue"
    },
    
    // Women Jeans
    {
        Brand: "Levi's",
        description: "Women's Slim Fit Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,jeans",
          filename: "women-jeans"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["24", "26", "28", "30", "32", "34"],
        category: "Jeans",
        gender: "Women",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "H&M",
        description: "Women's Skinny High Waist Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,skinny,jeans",
          filename: "women-skinny-jeans"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["24", "26", "28", "30", "32", "34"],
        category: "Jeans",
        gender: "Women",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Zara",
        description: "Women's Boyfriend Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,boyfriend,jeans",
          filename: "women-boyfriend-jeans"
        },
        price: 1499,
        delivery: "4-5 days",
        size: ["24", "26", "28", "30", "32", "34"],
        category: "Jeans",
        gender: "Women",
        offer: "20% Off",
        color: "Light Blue"
    },
    {
        Brand: "Gap",
        description: "Women's Straight Leg Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,straight,jeans",
          filename: "women-straight-jeans"
        },
        price: 1399,
        delivery: "2-3 days",
        size: ["24", "26", "28", "30", "32", "34"],
        category: "Jeans",
        gender: "Women",
        offer: "10% Off",
        color: "Medium Wash"
    },
    {
        Brand: "Calvin Klein",
        description: "Women's High Rise Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,highrise,jeans",
          filename: "women-highrise-jeans"
        },
        price: 1799,
        delivery: "3-4 days",
        size: ["24", "26", "28", "30", "32", "34"],
        category: "Jeans",
        gender: "Women",
        offer: "15% Off",
        color: "Dark Blue"
    },
    
    // Women Dresses
    {
        Brand: "H&M",
        description: "Women's Floral Print Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,floral,dress",
          filename: "women-floral-dress"
        },
        price: 999,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Dress",
        gender: "Women",
        offer: "10% Off",
        color: "Multicolor"
    },
    {
        Brand: "Zara",
        description: "Women's Bodycon Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,bodycon,dress",
          filename: "women-bodycon-dress"
        },
        price: 1299,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Dress",
        gender: "Women",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Forever 21",
        description: "Women's A-Line Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,aline,dress",
          filename: "women-aline-dress"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Dress",
        gender: "Women",
        offer: "20% Off",
        color: "Red"
    },
    {
        Brand: "Mango",
        description: "Women's Maxi Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,maxi,dress",
          filename: "women-maxi-dress"
        },
        price: 1499,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Dress",
        gender: "Women",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Vero Moda",
        description: "Women's Slip Dress",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,slip,dress",
          filename: "women-slip-dress"
        },
        price: 1199,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Dress",
        gender: "Women",
        offer: "15% Off",
        color: "Pink"
    },
    
    // Women Kurtas
    {
        Brand: "Biba",
        description: "Women's Embroidered Kurta",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,kurta",
          filename: "women-kurta"
        },
        price: 999,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Kurta",
        gender: "Women",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "W",
        description: "Women's Printed Kurta",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,printed,kurta",
          filename: "women-printed-kurta"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Kurta",
        gender: "Women",
        offer: "15% Off",
        color: "Yellow"
    },
    {
        Brand: "Aurelia",
        description: "Women's A-Line Kurta",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,aline,kurta",
          filename: "women-aline-kurta"
        },
        price: 799,
        delivery: "4-5 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Kurta",
        gender: "Women",
        offer: "20% Off",
        color: "Green"
    },
    {
        Brand: "Global Desi",
        description: "Women's Solid Kurta",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,solid,kurta",
          filename: "women-solid-kurta"
        },
        price: 1099,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Kurta",
        gender: "Women",
        offer: "10% Off",
        color: "Pink"
    },
    {
        Brand: "Fabindia",
        description: "Women's Cotton Kurta",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,cotton,kurta",
          filename: "women-cotton-kurta"
        },
        price: 1299,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Kurta",
        gender: "Women",
        offer: "15% Off",
        color: "White"
    },
    
    // Women Footwear
    {
        Brand: "Nike",
        description: "Women's Running Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,running,shoes",
          filename: "women-running-shoes"
        },
        price: 2999,
        delivery: "2-3 days",
        size: ["UK4", "UK5", "UK6", "UK7", "UK8"],
        category: "Footwear",
        gender: "Women",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Adidas",
        description: "Women's Casual Sneakers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,sneakers",
          filename: "women-sneakers"
        },
        price: 2499,
        delivery: "3-4 days",
        size: ["UK4", "UK5", "UK6", "UK7", "UK8"],
        category: "Footwear",
        gender: "Women",
        offer: "15% Off",
        color: "White"
    },
    {
        Brand: "Puma",
        description: "Women's Sports Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,sports,shoes",
          filename: "women-sports-shoes"
        },
        price: 1999,
        delivery: "4-5 days",
        size: ["UK4", "UK5", "UK6", "UK7", "UK8"],
        category: "Footwear",
        gender: "Women",
        offer: "20% Off",
        color: "Pink"
    },
    {
        Brand: "Reebok",
        description: "Women's Training Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,training,shoes",
          filename: "women-training-shoes"
        },
        price: 2799,
        delivery: "2-3 days",
        size: ["UK4", "UK5", "UK6", "UK7", "UK8"],
        category: "Footwear",
        gender: "Women",
        offer: "10% Off",
        color: "Gray"
    },
    {
        Brand: "Bata",
        description: "Women's Formal Heels",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,heels",
          filename: "women-heels"
        },
        price: 1499,
        delivery: "3-4 days",
        size: ["UK4", "UK5", "UK6", "UK7", "UK8"],
        category: "Footwear",
        gender: "Women",
        offer: "15% Off",
        color: "Black"
    },
    
    // Women Watches
    {
        Brand: "Fossil",
        description: "Women's Analog Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,analog,watch",
          filename: "women-analog-watch"
        },
        price: 3999,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Women",
        offer: "10% Off",
        color: "Rose Gold"
    },
    {
        Brand: "Daniel Wellington",
        description: "Women's Leather Strap Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,leather,watch",
          filename: "women-leather-watch"
        },
        price: 4999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Women",
        offer: "15% Off",
        color: "Brown"
    },
    {
        Brand: "Titan",
        description: "Women's Metal Strap Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,metal,watch",
          filename: "women-metal-watch"
        },
        price: 2999,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Women",
        offer: "20% Off",
        color: "Silver"
    },
    {
        Brand: "Casio",
        description: "Women's Digital Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,digital,watch",
          filename: "women-digital-watch"
        },
        price: 1999,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Women",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Swatch",
        description: "Women's Colorful Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,colorful,watch",
          filename: "women-colorful-watch"
        },
        price: 2499,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Women",
        offer: "15% Off",
        color: "Multicolor"
    },
    
    // Women Activewear
    {
        Brand: "Nike",
        description: "Women's Sports Bra",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,sports,bra",
          filename: "women-sports-bra"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Activewear",
        gender: "Women",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Adidas",
        description: "Women's Yoga Pants",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,yoga,pants",
          filename: "women-yoga-pants"
        },
        price: 1499,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Activewear",
        gender: "Women",
        offer: "15% Off",
        color: "Gray"
    },
    {
        Brand: "Puma",
        description: "Women's Training T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,training,tshirt",
          filename: "women-training-tshirt"
        },
        price: 999,
        delivery: "4-5 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Activewear",
        gender: "Women",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Under Armour",
        description: "Women's Running Shorts",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,running,shorts",
          filename: "women-running-shorts"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Activewear",
        gender: "Women",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Reebok",
        description: "Women's Fitness Jacket",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,fitness,jacket",
          filename: "women-fitness-jacket"
        },
        price: 1799,
        delivery: "3-4 days",
        size: ["XS", "S", "M", "L", "XL"],
        category: "Activewear",
        gender: "Women",
        offer: "15% Off",
        color: "Pink"
    },
    
    // Women Accessories
    {
        Brand: "H&M",
        description: "Women's Leather Handbag",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,leather,handbag",
          filename: "women-leather-handbag"
        },
        price: 1499,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Women",
        offer: "10% Off",
        color: "Brown"
    },
    {
        Brand: "Zara",
        description: "Women's Statement Necklace",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,necklace",
          filename: "women-necklace"
        },
        price: 599,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Women",
        offer: "15% Off",
        color: "Gold"
    },
    {
        Brand: "Forever 21",
        description: "Women's Hoop Earrings",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,earrings",
          filename: "women-earrings"
        },
        price: 299,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Women",
        offer: "20% Off",
        color: "Silver"
    },
    {
        Brand: "Mango",
        description: "Women's Silk Scarf",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,scarf",
          filename: "women-scarf"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Women",
        offer: "10% Off",
        color: "Multicolor"
    },
    {
        Brand: "Calvin Klein",
        description: "Women's Leather Belt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?women,belt",
          filename: "women-belt"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Women",
        offer: "15% Off",
        color: "Black"
    }
];

const womenData = womenListings;

module.exports = { womenData }; 