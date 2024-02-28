const mongoose=require('mongoose');

const personscheme=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    address:{
        type:String,
        
    },
    salary:{
        type:String,
        required:true,
    }
})

//craete a model
const person=mongoose.model('Person',personscheme);
module.exports=person;