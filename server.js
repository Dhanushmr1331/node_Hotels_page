const express = require('express')
const app = express() //express ko app me store karthiye
const b=require('./db')
require('dotenv').config();

const PORT=process.env.PORT || 3000;

const bodyParser = require('body-parser');
const person = require('./models/person');
app.use(bodyParser.json());//store in req.body


app.get('/', function (req, res) {
  res.send('hi welcome to my hotel.. how can i help you?');
})


//import routes files
const personroutes=require('./routes/personRoutes');

app.use('/person',personroutes);
const menuItemroutes=require('./routes/menuItemRoutes');
app.use('/MenuItem',menuItemroutes);


app.listen(PORT,()=>{
    console.log('listning on port number 3000');
})