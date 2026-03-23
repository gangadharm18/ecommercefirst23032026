const express=require('express')
const route=express.Router();
const cartcontroller=require('./controllers/cartController')

route.get('/:id',cartcontroller.cartGet)
route.post('/:id',cartcontroller.cartPost)
module.exports=route;