const kidBoyListings = [
    // Boys Jeans
    {
        Brand: "Levi's Kids",
        description: "Boys Regular Fit Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,jeans",
          filename: "boy-jeans"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Gap Kids",
        description: "Boys Slim Fit Denim Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?kids,denim",
          filename: "kids-denim"
        },
        price: 799,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "15% Off",
        color: "Dark Blue"
    },
    {
        Brand: "H&M Kids",
        description: "Boys Comfort Stretch Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,pants",
          filename: "boy-pants"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "20% Off",
        color: "Black"
    },
    {
        Brand: "Zara Kids",
        description: "Boys Distressed Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?distressed,jeans",
          filename: "distressed-jeans"
        },
        price: 999,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "10% Off",
        color: "Medium Blue"
    },
    {
        Brand: "The Children's Place",
        description: "Boys Pull-On Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,jeans",
          filename: "boy-pull-on"
        },
        price: 749,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "15% Off",
        color: "Light Wash"
    },
    {
        Brand: "Oshkosh B'gosh",
        description: "Boys Carpenter Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?carpenter,jeans",
          filename: "carpenter-jeans"
        },
        price: 899,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Old Navy Kids",
        description: "Boys Straight Leg Jeans",
        image: {
          url: "https://source.unsplash.com/random/900×700/?straight,jeans",
          filename: "straight-jeans"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Jeans",
        gender: "Boy",
        offer: "10% Off",
        color: "Medium Wash"
    },
    
    // Boys T-shirts
    {
        Brand: "Nike Kids",
        description: "Boys Sports T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,tshirt",
          filename: "boy-tshirt"
        },
        price: 499,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Adidas Kids",
        description: "Boys Performance T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?adidas,boy",
          filename: "adidas-boy"
        },
        price: 449,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "15% Off",
        color: "Red"
    },
    {
        Brand: "Puma Kids",
        description: "Boys Graphic Print T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?puma,tshirt",
          filename: "puma-tshirt"
        },
        price: 399,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "20% Off",
        color: "Green"
    },
    {
        Brand: "Gap Kids",
        description: "Boys Logo T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?gap,tshirt",
          filename: "gap-tshirt"
        },
        price: 349,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "10% Off",
        color: "Navy"
    },
    {
        Brand: "H&M Kids",
        description: "Boys Striped T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?striped,boy",
          filename: "striped-boy"
        },
        price: 299,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "15% Off",
        color: "Multicolor"
    },
    {
        Brand: "Marvel",
        description: "Boys Superhero T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?superhero,tshirt",
          filename: "superhero-tshirt"
        },
        price: 449,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "20% Off",
        color: "Black"
    },
    {
        Brand: "Carters",
        description: "Boys Henley T-shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?henley,boy",
          filename: "henley-boy"
        },
        price: 349,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "T-shirt",
        gender: "Boy",
        offer: "10% Off",
        color: "Gray"
    },
    
    // Boys Shirts
    {
        Brand: "Tommy Hilfiger Kids",
        description: "Boys Casual Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,shirt",
          filename: "boy-shirt"
        },
        price: 699,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Shirt",
        gender: "Boy",
        offer: "10% Off",
        color: "White"
    },
    {
        Brand: "H&M Kids",
        description: "Boys Checkered Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?checkered,shirt",
          filename: "checkered-shirt"
        },
        price: 599,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Shirt",
        gender: "Boy",
        offer: "15% Off",
        color: "Multicolor"
    },
    {
        Brand: "Gap Kids",
        description: "Boys Oxford Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?oxford,shirt",
          filename: "oxford-shirt"
        },
        price: 749,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Shirt",
        gender: "Boy",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Zara Kids",
        description: "Boys Linen Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?linen,shirt",
          filename: "linen-shirt"
        },
        price: 799,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Shirt",
        gender: "Boy",
        offer: "10% Off",
        color: "Beige"
    },
    {
        Brand: "US Polo",
        description: "Boys Polo Shirt",
        image: {
          url: "https://source.unsplash.com/random/900×700/?polo,shirt",
          filename: "polo-shirt"
        },
        price: 849,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Shirt",
        gender: "Boy",
        offer: "15% Off",
        color: "Red"
    },
    
    // Boys Footwear
    {
        Brand: "Nike Kids",
        description: "Boys Sports Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?nike,boy,shoes",
          filename: "nike-boy-shoes"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Boy",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Adidas Kids",
        description: "Boys Running Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?adidas,shoes",
          filename: "adidas-shoes"
        },
        price: 1199,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Boy",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Crocs",
        description: "Boys Clogs",
        image: {
          url: "https://source.unsplash.com/random/900×700/?crocs,boy",
          filename: "crocs-boy"
        },
        price: 799,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Boy",
        offer: "20% Off",
        color: "Blue"
    },
    {
        Brand: "Puma Kids",
        description: "Boys Sneakers",
        image: {
          url: "https://source.unsplash.com/random/900×700/?puma,sneakers",
          filename: "puma-sneakers"
        },
        price: 1099,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Boy",
        offer: "10% Off",
        color: "White"
    },
    {
        Brand: "Sketchers",
        description: "Boys Light-Up Shoes",
        image: {
          url: "https://source.unsplash.com/random/900×700/?lightup,shoes",
          filename: "lightup-shoes"
        },
        price: 1399,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Footwear",
        gender: "Boy",
        offer: "15% Off",
        color: "Black"
    },
    
    // Boys Activewear
    {
        Brand: "Nike Kids",
        description: "Boys Sports Set",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,sports,set",
          filename: "boy-sports-set"
        },
        price: 1299,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Activewear",
        gender: "Boy",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Adidas Kids",
        description: "Boys Track Pants",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,track,pants",
          filename: "boy-track-pants"
        },
        price: 899,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Activewear",
        gender: "Boy",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Puma Kids",
        description: "Boys Performance Jacket",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,sports,jacket",
          filename: "boy-sports-jacket"
        },
        price: 1199,
        delivery: "4-5 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Activewear",
        gender: "Boy",
        offer: "20% Off",
        color: "Red"
    },
    {
        Brand: "Under Armour Kids",
        description: "Boys Training Hoodie",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,hoodie",
          filename: "boy-hoodie"
        },
        price: 999,
        delivery: "2-3 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Activewear",
        gender: "Boy",
        offer: "10% Off",
        color: "Gray"
    },
    {
        Brand: "H&M Kids",
        description: "Boys Sports Shorts",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,sports,shorts",
          filename: "boy-sports-shorts"
        },
        price: 699,
        delivery: "3-4 days",
        size: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        category: "Activewear",
        gender: "Boy",
        offer: "15% Off",
        color: "Navy"
    },
    
    // Boys Accessories
    {
        Brand: "Nike Kids",
        description: "Boys Sports Cap",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,cap",
          filename: "boy-cap"
        },
        price: 399,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Boy",
        offer: "10% Off",
        color: "Black"
    },
    {
        Brand: "Adidas Kids",
        description: "Boys Backpack",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,backpack",
          filename: "boy-backpack"
        },
        price: 999,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Boy",
        offer: "15% Off",
        color: "Blue"
    },
    {
        Brand: "Carters",
        description: "Boys Suspenders",
        image: {
          url: "https://source.unsplash.com/random/900×700/?suspenders",
          filename: "suspenders"
        },
        price: 349,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Accessory",
        gender: "Boy",
        offer: "20% Off",
        color: "Black"
    },
    
    // Boys Watches
    {
        Brand: "Timex Kids",
        description: "Boys Analog Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?boy,watch",
          filename: "boy-watch"
        },
        price: 899,
        delivery: "2-3 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Boy",
        offer: "10% Off",
        color: "Blue"
    },
    {
        Brand: "Casio Kids",
        description: "Boys Digital Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?digital,watch",
          filename: "digital-watch"
        },
        price: 799,
        delivery: "3-4 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Boy",
        offer: "15% Off",
        color: "Black"
    },
    {
        Brand: "Marvel",
        description: "Boys Superhero Watch",
        image: {
          url: "https://source.unsplash.com/random/900×700/?superhero,watch",
          filename: "superhero-watch"
        },
        price: 699,
        delivery: "4-5 days",
        size: ["One Size"],
        category: "Watch",
        gender: "Boy",
        offer: "20% Off",
        color: "Red"
    }
];

const kidBoyData = kidBoyListings;

module.exports = { kidBoyData }; 