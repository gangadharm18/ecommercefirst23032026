const cartPost=(req,res)=>{
    const userId=parseInt(req.params.id)
   
  res.status(201).send(`Adding product to cart for user: ${userId}`)
}
const cartGet=(req,res)=>{
 const userId=parseInt(req.params.id)
 res.send(`Fetching cart for user with ID: ${userId}`)
}
module.exports={
    cartPost,
    cartGet
}