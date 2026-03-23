const express=require('express')
const route=express.Router();
const productController=require('./controllers/productController')

route.get('/',productController.getAllproducts)
route.get('/:id',productController.productGet)
route.post('/',productController.productPost)

module.exports=route;