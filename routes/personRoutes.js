const express = require('express')
const routes = express.Router()
const Person=require('./../models/person');

routes.post('/', async(req, res) => {
    try{
      const data = req.body; // Assuming the request body contains the person data
  
    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);
  
    // Save the new person to the database
     const response=await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
  
    }catch(err){
       console.log(err);
       res.status(500).json({error:'Internal Server Error'});
    }
  });

  routes.get('/', async(req,res)=>{
    try{
   const data= await Person.find();
   console.log('data fetched');
   res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }

});

routes.get('/:worktype', async(req,res)=>{
    try{
     const worktype=req.params.worktype;
 
     if(worktype=='manager'|| worktype=='waiter'|| worktype=='chef'){
            const response=await Person.find({work:worktype});
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
      const personid=req.params.id;
      const updatepersondata=req.body;

      const response=await Person.findByIdAndUpdate(personid,updatepersondata,{
        new:true,
        runValidatior:true,
      });
      console.log('data updated');
      if(!response){
        return res.status(404).json({error:'Person not found'});
      }

  }catch(err){
    console.log(err);
     res.status(500).json({error:'Internal Server Error'});
  }
 })

 routes.delete('/:id',async(req,res)=>{
  try{
    const personid=req.params.id;
    
    //const response = await Person.findByIdAndRemove(personid);
    const response = await Person.findOneAndDelete({ _id: personid });

    //const response= await Person.findByIdAndRemove(personid);
    
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data removed');
    res.status(200).json({message:'person successfully deleted'});
  }catch(err){
    console.log(err);
     res.status(500).json({error:'Internal Server Error'});
  }
 });

 module.exports=routes;