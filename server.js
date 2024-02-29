const express = require('express')
const app = express() //express ko app me store karthiye
const b=require('./db')
require('dotenv').config();

const PORT=process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());//store in req.body


app.get('/', function (req, res) {
  res.send('hi welcome to my hotel.. how can i help you?');
})


//import routes files
const personroutes=require('./routes/personRoutes');
const menuItemroutes=require('./routes/menuItemRoutes');
app.use('/person',personroutes);
app.use('/MenuItem',menuItemroutes);




app.listen(PORT,()=>{
    console.log('listning on port number 3000');
})