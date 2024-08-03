const express = require('express');
const JobPost = require('../models/jobpost');

const router = express.Router();

router.get('/',async (req,res)=>{
     console.log("find data")
     const alldata = await JobPost.find();
     console.log('alldata',alldata)
     return res.json(alldata);
    })

router.post('/postJob',async (req,res)=>{
    //  console.log('req',req)
     console.log('req.body',req.body)
     const post_count = await JobPost.count();
     console.log('post_number',post_count)
      
     const lastPost = await JobPost.findOne().sort({ post_number: -1 });
    const lastPostNumber = lastPost ? lastPost.post_number : 0;

    // Create a new job post with an incremented post_number
    const newPost = await JobPost.create({
      ...req.body, // Assuming req.body contains the data for the new job post
      post_number: lastPostNumber + 1,
      post_count:post_count+1
    });
    console.log('newPost',newPost)
    return res.json(newPost);
})



router.get('/recentposts',async(req,res)=>{
  // console.log('id',req.params.id)
  
  const data = await JobPost.find().sort({_id:-1}).limit(6);
  console.log('sghdrf',data)
  return res.json(data)

})
router.post('/jobroles',async(req,res)=>{
  console.log('job role',req)
  console.log('job role body',req.body)
  // const data = await JobPost.find().sort({_id:-1}).limit(6);
  // console.log('sghdrf',data)
  // return res.json(data)
  const data = await JobPost.find(req.body)
  console.log('data',data)
  return res.json(data)

})
router.get('/:id',async(req,res)=>{
  // console.log('id',req.params.id)
  
  const data = await JobPost.findOne({post_number:req.params.id})
  console.log('data',data)
  return res.json(data)

})


module.exports = router;
