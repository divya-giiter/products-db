const mongoose = require('mongoose');
const Product = require('./models/products');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 80,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 200,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 250,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 400,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 250,
        category: 'dairy'
    },  
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    });