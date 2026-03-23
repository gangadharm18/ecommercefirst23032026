const express=require('express')
const route=express.Router();


route.get('/:id',(req,res)=>{
 const userId=parseInt(req.params.id)
 res.send(`Fetching cart for user with ID: ${userId}`)
})
route.post('/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
   
  res.status(201).send(`Adding product to cart for user: ${userId}`)
})
module.exports=route;