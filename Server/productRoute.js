const express = require("express");
const Product = require("./product");
const {protect} = require("./middleware");
const router = express.Router();

router.get('/products',async(req,res)=>{
   try{
     const product = await Product.find();
     res.json(product);
   }
   catch(err){
    res.status(500).json({message : err.message});
   }
   
});

router.get('/products/:id',async(req,res)=>{
    try{
        const productid = await Product.findById(req.params.id);
        res.json(productid);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
    
});

router.post('/products',protect,async(req,res)=>{
   try{
    const create = await Product.create(req.body);
    res.json(create);
   }
   catch(err){
    res.status(500).json({message:err.message});
   }
});

router.put('/products/:id',protect,async(req,res)=>{
   try{
 
     const update = await Product.findByIdAndUpdate(req.params.id,req.body , {new:true});
     res.json(update);
   }
   catch(err){
    res.status(500).json({message:err.message});
   }

});
router.delete('/products/:id',protect,async(req,res)=>{
   try{
     const dlt = await Product.findByIdAndDelete(req.params.id);
     res.json(dlt);
   }
   catch(err){
    res.status(500).json({message:err.message});
   }
});
module.exports = router;