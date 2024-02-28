const mongoose=require('mongoose');
/*
{      "name": "Mango Smoothie",     
 "price": 4.99,     
  "taste": "Sweet",     
   "is_drink": true,     
    "ingredients": ["mango", "yogurt", "honey"],      
    "num_sales": 45 }

*/
const menuitemschema=new mongoose.Schema({
      name:{
        type:String,
        required:true,
      },
      price:{
         type:Number,
         required:true,
      },
      taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
      },
      is_drink:{
        type:Boolean,
        default:false,
      },
      ingredients:{
        type:[String],
        default:[],
      },
      num_sales:{
        type:Number,
        default:0
      },

});
const MenuItem=mongoose.model('MenuItem', menuitemschema);
module.exports=MenuItem;