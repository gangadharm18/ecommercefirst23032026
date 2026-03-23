const express=require('express')
const route=express.Router();

route.get('/',(req,res)=>{
 
 res.send(`Fetching all products`)
})
route.get('/:id',(req,res)=>{
 const userId=parseInt(req.params.id)
 res.send(`Fetching product with ID: ${userId}`)
})
route.post('/',(req,res)=>{
   
   
  res.status(201).send(`Adding a new product`)
})
module.exports=route;