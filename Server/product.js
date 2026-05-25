const mongoose = require('mongoose');

    const userProduct = new mongoose.Schema({
        name:String,
        price:Number,
        description:String,
        image:String,
        category:String,
        stock : Number,
        size :[String]
    });
 const Product = mongoose.model("Product" , userProduct);

 module.exports = Product;
