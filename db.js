//use for database connection
const mongoose=require('mongoose');
//define the Mongodb connection URL
const mongoURL='mongodb://localhost:27017/hotels'
//set up mongoose connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Mongoose aintains an default onnection object representing he MongoDB connection
const db=mongoose.connection;

//Defint the event listenrs for database connection

db.on('connected',()=>{
    console.log('connected to mongo db');
})

db.on('error',(err)=>{
    console.log('MongoDB onnection error',err);
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})


//Export the database connection
module.exports=db;//db is representing the mongoDB connection