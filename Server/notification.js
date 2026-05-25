const mongoose = require("mongoose");
const notifSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    message: String,
    read:Boolean,
    type:String
});
const Notification = mongoose.model("Notification",notifSchema);
module.exports = Notification;