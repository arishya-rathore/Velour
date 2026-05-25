const mongoose = require("mongoose");

 const cartSchema = new mongoose.Schema({
 userId : mongoose.Schema.Types.ObjectId,
products: [
    {
        productId : mongoose.Schema.Types.ObjectId,
        quantity : Number
    }
 ]
});
const Cart = mongoose.model("Cart" , cartSchema);
module.exports = Cart;
