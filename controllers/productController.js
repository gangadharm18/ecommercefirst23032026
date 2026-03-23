
const path=require('path')

const getAllproducts=(req,res)=>{
 
 res.sendFile(path.join(__dirname,"..","views","getProducts.html"))
}
const productPost=(req,res)=>{
 let {productName}=req.body;
   console.log("added product:", productName);
 res.status(201).send(`Adding a new product: ${productName}`);
 
 
}

const productGet=(req,res)=>{
 const userId=parseInt(req.params.id)
 res.send(`Fetching product with ID: ${userId} `)
 }
 


module.exports={
    productPost,
    productGet,
    getAllproducts

}