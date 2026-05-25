const express = require("express");
const {protect} = require('./middleware');
const Review = require('./review');
const router = express.Router();

router.get('/review/:productId',async(req , res)=>{
    try{
        const revFetch = await Review.find({productId:req.params.productId});
        res.json(revFetch);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/review/:productId',protect,async(req,res)=>{
    try{
        const revAdd = await Review.create(
         {userId:req.user.id,
         productId:req.params.productId , ...req.body});
         res.json(revAdd);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.delete('/review/:id',protect,async(req,res)=>{
    try{
        const revDlt = await Review.findByIdAndDelete(req.params.id);
        res.json(revDlt);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports = router;