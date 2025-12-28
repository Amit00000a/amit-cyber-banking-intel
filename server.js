const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/amitCyber')
.then(()=>console.log('MongoDB Connected'));

app.get('/', (req,res)=>{
  res.json({status:'Amit Cyber & Banking Platform API Running'});
});

app.listen(5000, ()=> console.log('Server running on port 5000'));
