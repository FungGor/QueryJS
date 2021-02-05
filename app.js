//Reference: https://www.youtube.com/watch?v=vjf774RKrLc&t=811s
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParer = require('body-parser');
require('dotenv/config');

app.use(bodyParer.json());
//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send('We are on home');
});


mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser:true},
  ()=>console.log('Connected to DB!')
);

app.listen(3000)