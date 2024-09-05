const mongoose = require('mongoose');
const Product = require('./models/product'); // Adjust the path as per your project structure

const arr = [
    {
        name: 'iPhone',
        img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 999999,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Macbook Pro',
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 8888888,
        desc: "The Macbook Pro is a line of high-performance laptops designed by Apple Inc. for professionals."
    },
    // Add more products as needed
];

function seedDB() {
    // Remove all existing products
    Product.deleteMany({})
        .then(() => {
            // Insert the array of products
            return Product.insertMany(arr);
        })
        .then(() => {
            console.log("Data Seeded");
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = seedDB;
