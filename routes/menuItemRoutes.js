const express = require('express')
const routes = express.Router()
const MenuItem=require('./../models/menuItem');


//post and get API for MENU
routes.post('/',async(req,res)=>{
    try{

        const data = req.body;
        const newMenu=new MenuItem(data);

        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }

});

routes.get('/', async(req,res)=>{
    try{
   const data= await MenuItem.find();
   console.log('data fetched');
   res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }

});

routes.get('/:Taste', async(req,res)=>{
    try{
     const Taste=req.params.Taste;
 
     if(Taste=='sweet'|| Taste=='sour'|| Taste=='spicy'){
            const response=await MenuItem.find({taste:Taste});
            console.log('response featched');
            res.status(200).json(response);
          
     }else{
         res.status(404).json({error:'Invalid work type'});
     }
 
    }catch(err){
     console.log(err);
     res.status(500).json({error:'Internal Server Error'});
    }
 });



//UPDATE METHOD 
 routes.put('/:id',async(req,res)=>{
  try{
      const menuitemid=req.params.id;
      const updatemenudata=req.body;

      const response=await MenuItem.findByIdAndUpdate(menuitemid,updatemenudata,{
        new:true,
        runValidatior:true,
      });
      console.log(' menu data updated');
      if(!response){
        return res.status(404).json({error:'menuitem not found'});
      }

  }catch(err){
    console.log(err);
     res.status(500).json({error:'Internal Server Error'});
  }
 })
module.exports=routes;