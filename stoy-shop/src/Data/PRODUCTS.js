import iphone14Img from '../Images/actualIphone14.png'
import iphone13Img from '../Images/actualIphone13.png'
import iphone12img from '../Images/actualphone12.png'
import samsungS23Img from '../Images/actualSamsungS23.webp'
import samsungS22Img from '../Images/actualSamsungs22.png'
import samsungTab from '../Images/actualSamsungGalaxyTab.png'
import appleTablet from '../Images/actualAppleTablet.png'
import macbookPro from '../Images/actualMacbookpro15.png'
import macbookAir from '../Images/actualMacbookAir.png'
import hp from '../Images/actualHP.png'
import dell from '../Images/actualDell.png'

export const PRODUCTS = [
    {
        id: 1,
        productName: 'Apple iPhone 14 Pro 256GB',
        price: 949,
        productImage: iphone14Img,
        category: "smartphones",
        productDescription: "iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. ",
        mainDescription: <ul><li>6.7-inch Super Retina XDR display2 featuring Always-On and ProMotion</li><br /><li>Dynamic Island, a magical new way to interact with iPhone</li><br /><li>48MP Main camera for up to 4x greater resolution</li><br /><li>Cinematic mode now in 4K Dolby Vision up to 30 fps</li><br /><li>Action mode for smooth, steady handheld videos</li></ul>,
        discounted: true,
        rating: 5,
        priceRange: 1,
        brand: 5
    },
    {
        id: 2,
        productName: 'Apple iPhone 13 128GB',
        price: 699,
        productImage: iphone13Img,
        category: "smartphones",
        productDescription: "iPhone 13. The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life.",
        mainDescription: <ul><li>6.1-inch Super Retina XDR display</li><br /><li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li><br /><li>Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</li><br /><li>12MP TrueDepth front camera with Night mode and 4K Dolby Vision HDR recording</li><br /><li>A15 Bionic chip for lightning-fast performance</li></ul>,
        discounted: false,
        rating: 3,
        priceRange: 1,
        brand: 5
    },{
        id: 3,
        productName: 'Apple iPhone 12 Pro 128GB',
        price: 599,
        productImage: iphone12img,
        category: "smartphones",
        productDescription: "Refurbished electronics are like new – just better for the planet and your pocket.",
        mainDescription: <ul><li>6.1-inch Super Retina XDR display</li><br /><li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li><br /><li>Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</li><br /><li>12MP TrueDepth front camera with Night mode and 4K Dolby Vision HDR recording</li><br /><li>A15 Bionic chip for lightning-fast performance</li></ul>,
        discounted: true,
        rating: 4,
        priceRange: 1,
        brand: 5
    },{
        id: 4,
        productName: 'Samsung Galaxy S23 Ultra Silicone Cover',
        price: 1499,
        productImage: samsungS23Img,
        category: "smartphones",
        productDescription: "Silicone cover is soft to the touch and stylish too. It fits super close to the phone, keeping its sleek shape and protecting against damage",
        mainDescription: <ul><li>Bright and vibrant 6.8-inch Dynamic AMOLED display</li><br /><li>200MP rear camera to capture life’s favourite moments</li><br /><li>12MP front-facing camera for great selfies</li><br /><li>Experience incredible sound with Dolby Atmos</li><br /><li>5G ready - incredible download speeds like never before</li></ul>,
        discounted: false,
        rating: 2,
        priceRange: 2,
        brand: 6
    },
    {
        id: 5,
        productName: 'Samsung Galaxy S22 Ultra 128GB',
        price: 1299,
        productImage: samsungS22Img,
        category: "smartphones",
        productDescription: "Get ready to be nominated ‘group photographer’ amongst your friends..! The Galaxy S23 Ultra boasts a jaw-dropping 200MP camera,",
        mainDescription: <ul><li>6.8-inch Dynamic AMOLED 2x display</li><br /><li>108MP triple rear camera for life's favourite moments</li><br /><li>40MP front-facing cameras for brilliant selfies</li><br /><li>Charges up really quickly when its battery runs low</li><br /><li>5G ready - incredible download speeds like never before</li></ul>,
        discounted: true,
        rating: 2,
        priceRange: 2,
        brand: 6
    },{
        id: 6,
        productName: 'Samsung Galaxy Tab S7 FE 5G 12.4" 64GB',
        price: 699,
        productImage: samsungTab,
        category: "tablets",
        productDescription: "Boasting a luxurious AMOLED 2X display the Galaxy Tab 2 offers more space and detail to enhance everything you could possibly want to do.",
        mainDescription: <ul><li>Android 11 installed</li><br /><li>WQXGA screen - for a stunning, clear picture</li><br /><li>64GB Storage - holds up to 1,600 apps</li><br /><li>Rear camera - 8 megapixel for superb quality photos</li><br /><li>Includes a Samsung S Pen for quick notes and sketches</li></ul>,
        discounted: false,
        rating: 5,
        priceRange: 1,
        brand: 6
    },{
        id: 7,
        productName: 'Apple iPad Pro 12.9" 128GB WiFi 2022',
        price: 1890,
        productImage: appleTablet,
        category: "tablets",
        productDescription: "iPad Pro. With astonishing performance, superfast wireless connectivity and next-generation Apple Pencil experience. Plus powerful new productivity and collaboration features in iPadOS 16. iPad Pro is the ultimate iPad experience.",
        mainDescription: <ul><li>Brilliant 12.9-inch Liquid Retina XDR display1 with ProMotion, True Tone and P3 wide colour</li><br /><li>M2 chip with 8-core CPU and 10-core GPU</li><br /><li>12MP Wide camera, 10MP Ultra Wide back camera and LiDAR scanner for immersive AR</li><br /><li>12MP Ultra Wide front camera with Centre Stage</li><br /><li>Stay connected with ultrafast Wi-Fi 6E</li></ul>,
        discounted: false,
        rating: 4,
        priceRange: 3,
        brand: 5

    },{
        id: 8,
        productName: 'Apple 16" MacBook Pro, Apple M1 Pro Chip [2021] - 512GB',
        price: 2210,
        productImage: macbookPro,
        category: "laptops",
        productDescription: "Apple M1 Pro chip for a massive leap in CPU, GPU and machine learning performance",
        mainDescription: <ul><li>Apple M1 Pro chip for a massive leap in CPU, GPU and machine learning performance</li><br /><li>Longer battery life, up to 21 hours</li><br /><li>Stunning 16-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio</li><br /><li>1080p FaceTime HD camera with advanced image signal processor for sharper video calls</li><br /><li>Six-speaker sound system with force-cancelling woofers</li></ul>,
        discounted: false,
        rating: 4,
        priceRange: 3,
        brand: 5

    },
    {
        id: 9,
        productName: 'Apple 15" MacBook Air 256GB',
        price: 1275,
        productImage: macbookAir,
        category: "laptops",
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, optio!",
        mainDescription: <ul><li>M2 chip for incredible performance</li><br /><li>8-core CPU and up to 10-core GPU to power through complex tasks</li><br /><li>16-core Neural Engine for advanced machine learning tasks</li><br /><li>Up to 24GB of unified memory makes everything you do fast and fluid</li><br /><li>Up to 20 per cent faster for applying image filters and effects</li></ul>,
        discounted: false,
        rating: 1,
        priceRange: 2,
        brand: 5
    },
    {
        id: 10,
        productName: 'Dell Inspiron 15 Laptop',
        price: 2099,
        productImage: dell,
        category: "laptops",
        productDescription: "The Dell XPS 13 Plus Laptop is slim, powerful and stays cool under pressure.",
        mainDescription: <ul><li>Up to 5.5 hours of battery life</li><br /><li>Full HD screen - for a stunning, clear picture</li><br /><li>256GB SSD offers plenty of storage and super-fast loading</li><br /><li>Intel® Core™ i5 processor with 8GB of RAM</li><br /><li>Windows 11 operating system already installed</li></ul>,
        discounted: false,
        rating: 1,
        priceRange: 3,
        brand: 7

    },{
        id: 11,
        productName: 'HP 14s-fq1013na 14" Laptop AMD Ryzen™ 5 512GB',
        price: 649,
        productImage: hp,
        category: "laptops",
        productDescription: "Lightweight laptop with a 9.5-hour battery life. Full HD screen - for a stunning, clear picture",
        mainDescription: <ul><li>Lightweight laptop with a 9.5-hour battery life</li><br /><li>Full HD screen - for a stunning, clear picture</li><br /><li>512GB SSD offers tons of storage and super-fast loading</li><br /><li>AMD Ryzen™ 5 processor with 4GB of RAM</li><br /><li>Windows 11 operating system already installed</li></ul>,
        discounted: false,
        rating: 5,
        priceRange: 1,
        brand: 8
    },
    // {
    //     id: 12,
    //     productName: 'Lenovo ThinkPad X1 Carbon',
    //     price: "1299",
    //     productImage: iphone14Img,
    //     category: "laptops",
    //     productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, optio!",
    //     discounted: false,
    //     rating: 3


    // }
]