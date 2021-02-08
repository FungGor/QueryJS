const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//GET BACK ALL THE POSTS
router.get('/',async (req,res)=>{
    try{
       const posts = await Post.find();
       res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/specific',(req,res)=>{
    res.send('Specific Posts');
});


//SUBMIT A POST
router.post('/',async (req,res)=>{
    //console.log(req.body);
    const post = new Post({
        employees: req.body.employees,
        id: req.body.id,
        position: req.body.position
    });
    
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }

    
});

//SPECIFIC POST
router.get('/:postID',async (req,res)=>{
    try{
       //Wait some times from the database server
       const post = await Post.findById(req.params.postID);
       res.json(post);
    }catch(error){
        res.json({message: error});
        console.log('Cannot Find');
    }
});

//DELETE SPECIFIC POST (DATABASE)
router.delete('/:postID',async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postID});
        res.json(removedPost);
    }catch(error){
        res.json({message: error});
    }
    
});

//UPDATE A POST (UPDATE A DATABASE)
router.patch('/:postID',async (req,res)=>{
    try{
      const updatedPost = await Post.updateOne(
        {_id: req.params.postID},
        {$set :{position: req.body.position}}
        );
        res.json(updatedPost);
    }catch(error){
        res.json({message: error});
    }
     
});
module.exports = router;