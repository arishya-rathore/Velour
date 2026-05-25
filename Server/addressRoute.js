const express = require("express");
const {protect} = require("./middleware");
const Address = require("./address");
const router = express.Router();

router.get('/address',protect,async(req,res)=>{
    try{
        const allAddress = await Address.find({userId:req.user.id});
    res.json(allAddress);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/address',protect,async(req,res)=>{
try{
    const createAdd = await Address.create({userId:req.user.id , ...req.body});
    res.json(createAdd);
}
 catch(err){
        res.status(500).json({message:err.message});
    }
});

router.put('/address/:id',protect,async(req,res)=>{
try{
    const updateAdd = await Address.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateAdd);
}
catch(err){
        res.status(500).json({message:err.message});
    }
});

router.delete('/address/:id',protect,async(req,res)=>{
try{
    const dltAdd = await Address.findByIdAndDelete(req.params.id);
    res.json(dltAdd);
}
catch(err){
     res.status(500).json({message:err.message});
}
});

router.put('/address/:id/default',protect,async(req,res)=>{
try{
    const resetAdd = await Address.updateMany({userId:req.user.id},{$set:{isDefault:false}})
    const setDefault = await Address.findByIdAndUpdate(req.params.id,{$set:{isDefault:true}},{new:true});
    res.json(setDefault);
}
catch(err){
     res.status(500).json({message:err.message});
}
});

module.exports = router;