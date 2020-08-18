const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const users =["Munna", "Mowri", "Adity","Saleh", "SK"];

app.get('/users/:id',(req,res)=>{
   const id = req.params.id; 
   const name = users[id];
   res.send({id,name});
});


//post 
app.post('/addUser',(req,res)=>{
    //save to database

    const user = req.body;
    user.id =44;
    res.send(user);
});


app.listen(3000, ()=> console.log("Listening port from 3000"));
