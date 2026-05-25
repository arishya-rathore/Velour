const mongoose = require("mongoose");
const revSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    productId : mongoose.Schema.Types.ObjectId,
    rating:Number,
    comment:String,
    verifiedPurchase : Boolean
});
const Reviews = mongoose.model("Reviews" , revSchema);
module.exports = Reviews; 