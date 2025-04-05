const menListings = [
    // Men Shirts
    {
        Brand: "Allen Solly",
        description: "Men's Formal Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,formal,shirt",
          filename: "men-formal-shirt"
        },
        price: 999,
        delivery: "2-3 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Shirt",
        gender: "Men",
        offer: "10% Off",
        color: "White"
    },
    {
        Brand: "Van Heusen",
        description: "Men's Checkered Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,checkered,shirt",
          filename: "men-checkered-shirt"
        },
        price: 1099,
        delivery: "3-4 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Shirt",
        gender: "Men",
        offer: "15% Off",
        color: "Blue"
    },
    {
        Brand: "Louis Philippe",
        description: "Men's Premium Formal Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,premium,shirt",
          filename: "men-premium-shirt"
        },
        price: 1599,
        delivery: "4-5 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Shirt",
        gender: "Men",
        offer: "20% Off",
        color: "Black"
    },
    {
        Brand: "Peter England",
        description: "Men's Office Wear Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,office,shirt",
          filename: "men-office-shirt"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Shirt",
        gender: "Men",
        offer: "10% Off",
        color: "Light Blue"
    },
    {
        Brand: "Raymond",
        description: "Men's Striped Formal Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,striped,shirt",
          filename: "men-striped-shirt"
        },
        price: 1299,
        delivery: "3-4 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Shirt",
        gender: "Men",
        offer: "15% Off",
        color: "Pink"
    },
    
    // Men T-shirts
    {
        Brand: "Nike",
        description: "Men's Sports T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,sports,tshirt",
          filename: "men-sports-tshirt"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "T-shirt",
        gender: "Men",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Adidas",
        description: "Men's Casual T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,casual,tshirt",
          filename: "men-casual-tshirt"
        },
        price: 699,
        delivery: "3-4 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "T-shirt",
        gender: "Men",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Puma",
        description: "Men's Graphic Print T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,graphic,tshirt",
          filename: "men-graphic-tshirt"
        },
        price: 599,
        delivery: "4-5 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "T-shirt",
        gender: "Men",
        offer: "20% Off",
        color: "Red"
    },
    {
        Brand: "Tommy Hilfiger",
        description: "Men's Premium T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,premium,tshirt",
          filename: "men-premium-tshirt"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "T-shirt",
        gender: "Men",
        offer: "10% Off",
        color: "White"
    },
    {
        Brand: "Calvin Klein",
        description: "Men's Logo T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,logo,tshirt",
          filename: "men-logo-tshirt"
        },
        price: 1099,
        delivery: "3-4 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "T-shirt",
        gender: "Men",
        offer: "15% Off",
        color: "Gray"
    },
    
    // Men Jeans
    {
        Brand: "Levi's",
        description: "Men's Slim Fit Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,slim,jeans",
          filename: "men-slim-jeans"
        },
        price: 1499,
        delivery: "2-3 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Jeans",
        gender: "Men",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Wrangler",
        description: "Men's Regular Fit Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,regular,jeans",
          filename: "men-regular-jeans"
        },
        price: 1399,
        delivery: "3-4 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Jeans",
        gender: "Men",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Lee",
        description: "Men's Bootcut Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,bootcut,jeans",
          filename: "men-bootcut-jeans"
        },
        price: 1299,
        delivery: "4-5 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Jeans",
        gender: "Men",
        offer: "20% Off",
        color: "Dark Blue"
    },
    {
        Brand: "Pepe Jeans",
        description: "Men's Skinny Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,skinny,jeans",
          filename: "men-skinny-jeans"
        },
        price: 1599,
        delivery: "2-3 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Jeans",
        gender: "Men",
        offer: "10% Off",
        color: "Light Wash"
    },
    {
        Brand: "Diesel",
        description: "Men's Distressed Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,distressed,jeans",
          filename: "men-distressed-jeans"
        },
        price: 1899,
        delivery: "3-4 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Jeans",
        gender: "Men",
        offer: "15% Off",
        color: "Medium Wash"
    },
    
    // Men Trousers
    {
        Brand: "Allen Solly",
        description: "Men's Formal Trousers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,formal,trousers",
          filename: "men-formal-trousers"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Trouser",
        gender: "Men",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Van Heusen",
        description: "Men's Slim Fit Trousers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,slim,trousers",
          filename: "men-slim-trousers"
        },
        price: 1399,
        delivery: "3-4 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Trouser",
        gender: "Men",
        offer: "15% Off",
        color: "Navy"
    },
    {
        Brand: "Louis Philippe",
        description: "Men's Checked Trousers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,checked,trousers",
          filename: "men-checked-trousers"
        },
        price: 1499,
        delivery: "4-5 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Trouser",
        gender: "Men",
        offer: "20% Off",
        color: "Gray"
    },
    {
        Brand: "Peter England",
        description: "Men's Office Trousers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,office,trousers",
          filename: "men-office-trousers"
        },
        price: 1199,
        delivery: "2-3 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Trouser",
        gender: "Men",
        offer: "10% Off",
        color: "Beige"
    },
    {
        Brand: "Raymond",
        description: "Men's Premium Trousers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,premium,trousers",
          filename: "men-premium-trousers"
        },
        price: 1599,
        delivery: "3-4 days",
        size: ["28", "30", "32", "34", "36", "38"],
        category: "Trouser",
        gender: "Men",
        offer: "15% Off",
        color: "Brown"
    },
    
    // Men Footwear
    {
        Brand: "Nike",
        description: "Men's Running Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,running,shoes",
          filename: "men-running-shoes"
        },
        price: 3499,
        delivery: "2-3 days",
        size: ["UK6", "UK7", "UK8", "UK9", "UK10", "UK11"],
        category: "Footwear",
        gender: "Men",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Adidas",
        description: "Men's Casual Sneakers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,casual,sneakers",
          filename: "men-casual-sneakers"
        },
        price: 2999,
        delivery: "3-4 days",
        size: ["UK6", "UK7", "UK8", "UK9", "UK10", "UK11"],
        category: "Footwear",
        gender: "Men",
        offer: "15% Off",
        color: "White"
    },
    {
        Brand: "Puma",
        description: "Men's Sports Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,sports,shoes",
          filename: "men-sports-shoes"
        },
        price: 2499,
        delivery: "4-5 days",
        size: ["UK6", "UK7", "UK8", "UK9", "UK10", "UK11"],
        category: "Footwear",
        gender: "Men",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Reebok",
        description: "Men's Training Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,training,shoes",
          filename: "men-training-shoes"
        },
        price: 2799,
        delivery: "2-3 days",
        size: ["UK6", "UK7", "UK8", "UK9", "UK10", "UK11"],
        category: "Footwear",
        gender: "Men",
        offer: "10% Off",
        color: "Gray"
    },
    {
        Brand: "Bata",
        description: "Men's Formal Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,formal,shoes",
          filename: "men-formal-shoes"
        },
        price: 1999,
        delivery: "3-4 days",
        size: ["UK6", "UK7", "UK8", "UK9", "UK10", "UK11"],
        category: "Footwear",
        gender: "Men",
        offer: "15% Off",
        color: "Brown"
    },
    
    // Men Watches
    {
        Brand: "Fossil",
        description: "Men's Analog Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,analog,watch",
          filename: "men-analog-watch"
        },
        price: 5999,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Men",
        offer: "10% Off",
        color: "Silver"
    },
    {
        Brand: "Casio",
        description: "Men's Digital Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,digital,watch",
          filename: "men-digital-watch"
        },
        price: 2999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Men",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Titan",
        description: "Men's Formal Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,formal,watch",
          filename: "men-formal-watch"
        },
        price: 3999,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Men",
        offer: "20% Off",
        color: "Gold"
    },
    {
        Brand: "Timex",
        description: "Men's Chronograph Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,chronograph,watch",
          filename: "men-chronograph-watch"
        },
        price: 4999,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Men",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Seiko",
        description: "Men's Automatic Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,automatic,watch",
          filename: "men-automatic-watch"
        },
        price: 9999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Men",
        offer: "15% Off",
        color: "Brown"
    },
    
    // Men Activewear
    {
        Brand: "Nike",
        description: "Men's Dri-FIT T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,drifit,tshirt",
          filename: "men-drifit-tshirt"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Activewear",
        gender: "Men",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Adidas",
        description: "Men's Training Shorts",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,training,shorts",
          filename: "men-training-shorts"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Activewear",
        gender: "Men",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Puma",
        description: "Men's Track Pants",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,track,pants",
          filename: "men-track-pants"
        },
        price: 1499,
        delivery: "4-5 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Activewear",
        gender: "Men",
        offer: "20% Off",
        color: "Gray"
    },
    {
        Brand: "Under Armour",
        description: "Men's Sports Jacket",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,sports,jacket",
          filename: "men-sports-jacket"
        },
        price: 2499,
        delivery: "2-3 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Activewear",
        gender: "Men",
        offer: "10% Off",
        color: "Red"
    },
    {
        Brand: "Reebok",
        description: "Men's Performance Hoodie",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,performance,hoodie",
          filename: "men-performance-hoodie"
        },
        price: 1999,
        delivery: "3-4 days",
        size: ["S", "M", "L", "XL", "XXL"],
        category: "Activewear",
        gender: "Men",
        offer: "15% Off",
        color: "Navy"
    },
    
    // Men Accessories
    {
        Brand: "Hidesign",
        description: "Men's Leather Wallet",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,leather,wallet",
          filename: "men-leather-wallet"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Men",
        offer: "10% Off",
        color: "Brown"
    },
    {
        Brand: "Ray-Ban",
        description: "Men's Aviator Sunglasses",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,aviator,sunglasses",
          filename: "men-aviator-sunglasses"
        },
        price: 3999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Men",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Tommy Hilfiger",
        description: "Men's Leather Belt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,leather,belt",
          filename: "men-leather-belt"
        },
        price: 1499,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Men",
        offer: "20% Off",
        color: "Brown"
    },
    {
        Brand: "Skybags",
        description: "Men's Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,backpack",
          filename: "men-backpack"
        },
        price: 1799,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Men",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Louis Philippe",
        description: "Men's Leather Gloves",
        image: {
          url: "https://source.unsplash.com/random/900×700/?men,leather,gloves",
          filename: "men-leather-gloves"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Men",
        offer: "15% Off",
        color: "Brown"
    }
];

const menData = menListings;

module.exports = { menData }; 