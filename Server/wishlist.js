const mongoose = require("mongoose");
const wishSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    products: [ mongoose.Schema.Types.ObjectId],
    priceDropAlert : Boolean
});
const WishList = mongoose.model("WishList" , wishSchema);
module.exports = WishList;