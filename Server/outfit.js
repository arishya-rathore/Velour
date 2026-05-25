const mongoose = require("mongoose");
const outfitSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    name : String,
    products:[ mongoose.Schema.Types.ObjectId,]
});
const Outfit = mongoose.model("Outfit",outfitSchema);
module.exports = Outfit;