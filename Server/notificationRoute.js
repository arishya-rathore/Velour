const express = require("express");
const {protect} = require('./middleware');
const Notification = require('./notification');
const router = express.Router();

router.get('/notifications',protect,async(req,res)=>{
    try{
        const notif = await Notification.find({userId:req.user.id});
        res.json(notif);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.put('/notifications/:id',protect,async(req,res)=>{
    try{
        const notifRead = await Notification.findByIdAndUpdate(
        req.params.id , 
        {$set:{read : true}});
        res.json(notifRead);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.delete('/notifications/:id',protect,async (req,res)=>{
    try{
        const notifDlt = await Notification.findByIdAndDelete(req.params.id);
        res.json(notifDlt);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports = router;