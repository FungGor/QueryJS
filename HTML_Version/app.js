const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParer = require('body-parser');
const morgan = require('morgan');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>console.log('Connected to DB!')
);

app.listen(3000);