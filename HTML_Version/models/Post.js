const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
     employees:{
         type:String,
         required: true
     },
     id:{
         type:String,
         required: true
     },
     position:{
         type: String,
         required: true
     },
     date:{
         type: Date,
         default: Date.now
     }
});

module.exports = mongoose.model('Posts',PostSchema)