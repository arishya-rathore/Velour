const express = require("express");
const {protect} = require("./middleware");
const Cart = require("./cart");
const router = express.Router();

router.get('/cart',protect,async(req,res)=>{
    try{
        const cartData = await Cart.findOne({userId: req.user.id});
        res.json(cartData);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/cart',protect,async(req,res)=>{
   try{
     const addProd = await Cart.findOneAndUpdate({userId:req.user.id} ,
     {$push: {products:req.body}} ,  {upsert:true , new:true});
     res.json(addProd);
   }
   catch(err){
    res.status(500).json({message:err.message});
   }
});
   router.put('/cart',protect,async(req,res)=>{
    try{
        const update = await Cart.findOneAndUpdate(
        {userId:req.user.id,"products._id" : req.body.productId},
        {$set: {"products.$.quantity" : req.body.quantity} },
        {new  :true} );
        res.json(update);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
   });

router.delete('/cart',protect,async(req,res)=>{
    try{
        const deleteProd = await Cart.findOneAndUpdate(
        {userId : req.user.id },
        {$pull: {products: {_id : req.body.productId }}},
        {new : true});
        res.json(deleteProd);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports = router;
