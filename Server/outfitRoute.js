const express = require ('express');
const {protect} = require('./middleware');
const Outfit = require('./outfit');
const router = express.Router();

router.get('/outfits',protect,async(req,res)=>{
    try{
        const fetch = await Outfit.find({userId:req.user.id});
        res.json(fetch);
    }
    catch(err){
        res.status(500).json({message:err.message});

    }
});

router.post('/outfits',protect,async(req,res)=>{
    try{
        const createOt = await Outfit.create(
        {userId:req.user.id,...req.body});
        res.json(createOt);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.put('/outfits/:id',protect,async(req,res)=>{
    try{
        const update = await Outfit.findByIdAndUpdate(req.params.id , 
        req.body,
        {new : true});
        res.json(update);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.delete('/outfits/:id',protect,async(req,res)=>{
    try{
     const dlt = await Outfit.findByIdAndDelete(req.params.id);
     res.json(dlt);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
module.exports = router;

