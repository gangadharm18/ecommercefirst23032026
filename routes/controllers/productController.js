const productPost=(req,res)=>{
   
  res.status(201).send(`Adding a new product`)
}

const productGet=(req,res)=>{
 const userId=parseInt(req.params.id)
 res.send(`Fetching product with ID: ${userId}`)
}
const getAllproducts=(req,res)=>{
 
 res.send(`Fetching all products`)
}

module.exports={
    productPost,
    productGet,
    getAllproducts

}