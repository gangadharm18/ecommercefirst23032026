const productServices=require('../services/productService')
const productPost=(req,res)=>{
   
  res.status(201).send(`Adding a new product`)
}

const productGet=(req,res)=>{
 const userId=parseInt(req.params.id)
 const product=productServices.getProductById(userId);
 if(product){
  res.send(`Fetching product with ID: ${userId} ${product.pname} `)
 }else{
   res.status(404).send(`Product not found`)
}
 }
 
const getAllproducts=(req,res)=>{
 let products=productServices.readAllProducts();
 products=productServices.sortByParams(req.query,products);
 res.send(products)
}

module.exports={
    productPost,
    productGet,
    getAllproducts

}