const express = require("express");
const {protect} = require("./middleware");
const Order = require("./order");
const router = express.Router();

router.get('/orders',protect,async(req,res)=>{
    try{
        const fetch = await Order.find({userId:req.user.id});
        res.json(fetch);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
router.post('/orders',protect,async(req,res)=>{
    try{
        const addNew = await Order.create({userId:req.user.id , ...req.body});
        res.json(addNew);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
router.get('/orders/:id',protect,async(req,res)=>{
    try{
        const singleOrder = await Order.findById(
        req.params.id);
        res.json(singleOrder);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.put('/orders/:id',protect,async(req,res)=>{
    try{
        const update = await Order.findByIdAndUpdate(
        req.params.id,
        {$set:{status:req.body.status}},
        {new : true}
    );
    res.json(update);
    }
    catch(err){
        res.status(500).json({message:err.mesage});
    }
});

router.delete('/orders/:id',protect,async(req,res)=>{
    try{
        const dltOrder = await Order.findByIdAndDelete(req.params.id );
        res.json(dltOrder);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports = router;