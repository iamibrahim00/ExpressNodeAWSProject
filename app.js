
const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors')
var jsonParser = bodyParser.json()
const app = express();
app.use(express.json())
app.use(cors()) 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser)

app.get('http://localhost:3000/user/signup',(req,res)=>{
    res.send('hello')
})

app.post('http://localhost:3000/user/signup',(req,res)=>{
   console.log(req.body)
})

app.listen(3000)