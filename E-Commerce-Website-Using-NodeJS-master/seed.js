const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://vahej23222:36ItyZ3OSBRaGO8l@emobro.z8fys02.mongodb.net/'; // Replace with your MongoDB connection URI

// Database Name
const dbName = 'test'; // Replace with your database name

// Data array to insert
const arr = [
    {
        name: 'iPhone 13 Pro',
        img: 'https://images.unsplash.com/photo-1630337917386-40d8b45bf787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA2MjY5&ixlib=rb-1.2.1&q=80&w=1080',
        price: 999,
        desc: "The iPhone 13 Pro is a high-end smartphone designed and manufactured by Apple Inc. It features a Super Retina XDR display, A15 Bionic chip, and advanced camera system."
    },
    {
        name: 'Samsung Galaxy S21 Ultra',
        img: 'https://images.unsplash.com/photo-1601562798473-0b67702b69dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDAy&ixlib=rb-1.2.1&q=80&w=1080',
        price: 1199,
        desc: "The Samsung Galaxy S21 Ultra is a flagship smartphone from Samsung Electronics. It features a 108MP camera, 120Hz Dynamic AMOLED display, and powerful Exynos 2100 or Snapdragon 888 chipset."
    },
    {
        name: 'MacBook Pro 2021',
        img: 'https://images.unsplash.com/photo-1617887382066-4734339ec869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDM2&ixlib=rb-1.2.1&q=80&w=1080',
        price: 2399,
        desc: "The MacBook Pro 2021 is a powerful laptop from Apple Inc., known for its M1 Pro or M1 Max chip, vibrant Liquid Retina XDR display, and advanced performance capabilities."
    },
    {
        name: 'Sony PlayStation 5',
        img: 'https://images.unsplash.com/photo-1605659898864-7f8e5d672b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDQy&ixlib=rb-1.2.1&q=80&w=1080',
        price: 499,
        desc: "The Sony PlayStation 5 is a next-generation gaming console with 4K graphics, high-speed SSD, and DualSense wireless controller, offering immersive gaming experiences."
    },
    {
        name: 'Canon EOS R5',
        img: 'https://images.unsplash.com/photo-1593642537814-6dcb8ec31b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDU0&ixlib=rb-1.2.1&q=80&w=1080',
        price: 3899,
        desc: "The Canon EOS R5 is a mirrorless camera known for its 45MP full-frame sensor, 8K RAW video recording, and advanced autofocus capabilities, ideal for professional photographers and videographers."
    },
    {
        name: 'Dell XPS 15',
        img: 'https://images.unsplash.com/photo-1614818708764-e2588ab1c4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDYw&ixlib=rb-1.2.1&q=80&w=1080',
        price: 1699,
        desc: "The Dell XPS 15 is a premium laptop with a stunning 4K InfinityEdge display, powerful Intel Core processor options, and exceptional build quality, designed for professionals and content creators."
    },
    {
        name: 'Apple Watch Series 7',
        img: 'https://images.unsplash.com/photo-1610067869488-4c8f26f130ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDY5&ixlib=rb-1.2.1&q=80&w=1080',
        price: 399,
        desc: "The Apple Watch Series 7 is a smartwatch that offers advanced health and fitness features, a larger Retina display, and faster charging, enhancing the user experience."
    },
    {
        name: 'Google Pixel 6 Pro',
        img: 'https://images.unsplash.com/photo-1631711827293-27a2edcfd1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDc0&ixlib=rb-1.2.1&q=80&w=1080',
        price: 899,
        desc: "The Google Pixel 6 Pro is a flagship smartphone with a 6.7-inch OLED display, advanced camera system with enhanced low-light performance, and powerful performance driven by Google Tensor."
    },
    {
        name: 'Bose QuietComfort 45',
        img: 'https://images.unsplash.com/photo-1580972005979-2f26fc7b50bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDg4&ixlib=rb-1.2.1&q=80&w=1080',
        price: 329,
        desc: "The Bose QuietComfort 45 is a premium noise-canceling headphone known for its exceptional sound quality, comfortable design, and advanced noise-canceling technology, ideal for travelers and audiophiles."
    },
    {
        name: 'Nintendo Switch OLED Model',
        img: 'https://images.unsplash.com/photo-1621765737625-2a8b6f5e8e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MDQ0fDB8MHxhbGx8fHx8fHx8fHwxNjM1NjA3MDk5&ixlib=rb-1.2.1&q=80&w=1080',
        price: 349,
        desc: "The Nintendo Switch OLED Model is a gaming console with a vibrant OLED screen, versatile Joy-Con controllers, and a rich library of games, offering a versatile gaming experience at home or on the go."
    }
];


async function seedData() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('products'); // Replace 'products' with your collection name

        // Insert many documents
        const result = await collection.insertMany(arr);
        console.log(`${result.insertedCount} documents inserted`);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

seedData();
