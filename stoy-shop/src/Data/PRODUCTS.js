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
        mainDescription: "Pro doesn’t do justice to how impressive this iPhone is. With a massive camera upgrade, Apple’s new super-speedy A16 Bionic chip, tonnes of safety innovations, and a screen so pretty it rivals most TVs, this is one seriously impressive piece of tech. And yet, even with all its new capabilities, it still delivers amazing all‑day battery life. Bravo, Apple. You’ve redefined what a smartphone can be. Again.",
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
        mainDescription: "Everything you know and love about the iPhone made better. Apple has kitted out the newest iteration of their flagship phone with their most advanced dual-camera system yet, along with a lightning-fast chip that makes browsing, gaming, and video calling a cinch. Encased in a durable, flat-edge design that's water-resistant, it's protected from the bumps and knocks of everyday life. All this, and they've still managed to fit in a bigger battery that'll see you through the day and well into the night.",
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
        mainDescription: "A thin, light and protective case for your iPhone 12 / 12 Pro. Made from a blend of optically clear polycarbonate and flexible materials with a scratch-resistant coating, this is the perfect way to show off the brilliant new coloured finish of your new iPhone.",
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
        mainDescription: "If you’re serious about your mobile, you’ll definitely want to check out this incredible green Samsung S23 Ultra smartphone. Its huge 6.8-inch Dynamic AMOLED display is absolutely amazing for streaming, gaming and scrolling. It’s bright, colourful and super detailed – like a mini cinema in your pocket. What better way to marvel at the gorgeous snaps you’ll take with the 200MP rear camera? Yeah, you read that right – 200MP. If that wasn’t enough, its 12MP front-facing camera is brilliant at capturing your best side if it’s time for a new selfie. Plus, Dolby Atmos® surround sound wraps you up in whatever you’re up to, while 5G means your tunes won’t be interrupted by slow downloads or buffering. Perfect.",
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
        mainDescription: "This phantom white Samsung Galaxy S22 Ultra phone is worth getting excited about. It’s 5G ready for rapid download speeds, and the 6.8-inch Dynamic AMOLED 2x display means whether you’re scrolling or streaming, you’ll be doing it on a huge screen with stunning detail. All that is impressive enough, but the real star of the show is the 108MP quadruple rear camera with 3x hybrid optical zoom – this epic system means that quality isn’t lost, even when you’re far away. You won’t have to put up with grainy selfies either, since the front camera is a whopping 40MP. And if it’s your round at the bar, your wallet is one less thing you’ll have to remember; you can just tap with Samsung Pay instead. ",
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
        mainDescription: "Think of this silver Samsung Galaxy Tab S7 FE as your new I-can’t-leave-the-house-without-it gadget. It’s got everything you need jam packed in such a pretty and thin tablet. We’re talking a great camera, an insane number of apps – 1,600 of them, in fact – and a WQXGA screen that makes it all look so good. Think about it. You’ll have your music, books, TV shows, films, photo and video editing tools, work stuff, social media and way more always with you, all the time. And it even has a handy S Pen too. It’s great if you’re a little arty – it lets you draw and doodle on the screen – or you can just use it to scribble down the shopping list while you remember everything.",
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
        mainDescription: "The ultimate iPad just got a serious upgrade. Supercharged by Apple’s M2 processor, the 11” 2022 iPad Pro delivers astonishing performance, an amazingly advanced display, and stunning speed. Fitted with a Liquid Retina display, a 12MP 122° field of view front camera, plus 12MP wide & 10MP ultra-wide rear cameras, your photos, videos, entertainment and games all look staggeringly good. This is a Pro level iPad experience.",
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
        mainDescription: "The new MacBook Pro delivers game-changing performance for pro users. Choose the powerful M1 Pro or the even more powerful M1 Max to supercharge pro-level workflows while getting amazing battery life.1 And with an immersive 16-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro.2",
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
        mainDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, optio!",
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
        mainDescription: "This slim, lightweight and surprisingly powerful laptop is a looker before you've even opened it, thanks to a sleek silver shell - but things just keep getting better and better inside. It weighs only 1.23kg, but no compromises have been made when it comes to offering you first-class features. Blitz through any task thanks a stunning combination of speed, performance and premium mobility.",
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
        mainDescription: "Writing the next bestselling novel in a coffee shop, smashing work tasks on the train or streaming Netflix in bed – there’s loads this lightweight HP laptop is great for. With a Full HD screen, you’ll have a great view of whatever you’re up to. And the 9.5-hour battery will easily carry you through productive days and boxsets binges alike. Everyone deserves a day off. Combine all that with an AMD Ryzen™ 5 processor and 4GB of RAM, and it's ready to handle a few apps all at once. Plus, its 512GB SSD gives you plenty of room for pics, music and more – not to mention fast load times.",
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