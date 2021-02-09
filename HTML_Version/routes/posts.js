//https://dev.to/moz5691/method-override-for-put-and-delete-in-html-3fp2
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { read } = require('fs');
router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));
router.use(express.static('./public'));

router.get('/welcome',(req,res)=>{
    res.send('Here you will create the database');
});

//GET BACK ALL THE POSTS
router.get('/find',async (req,res)=>{
    try{
       const posts = await Post.find();
       res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/create_employees',async(req,res)=>{
   console.log("Trying to create a new user");
   const post = new Post({
      employees: req.body.employees,
      id: req.body.id,
      position: req.body.position
   });
   try{
      const savedPost = await post.save();
      res.json(savedPost);
      console.log("Successfully added the information")
      res.end();
   }catch(err){
      res.json({message:err});
      console.log("Failed to add the information")
   }
   res.end();   
});

router.delete('/delete_employees',async(req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.body.id});
        res.json(removedPost);
        console.log("Successfully removed the information")
        res.end();
    }catch(error){
        res.json({message: error});
    }
    res.end();
});

module.exports = router;