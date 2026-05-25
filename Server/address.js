const mongoose = require("mongoose");
const addSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    addresses : [{
        street : String ,
        city : String,
        state : String,
        pincode : Number,
        isDefault : Boolean
    }],
});
const Address = mongoose.model("Address" , addSchema);
module.exports = Address;