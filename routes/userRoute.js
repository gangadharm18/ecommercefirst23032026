const express=require('express')
const route=express.Router();
const userController=require('./controllers/userController')

route.get('/',userController.getallUsers)
route.get('/:id',userController.getuserById)
route.post('/',userController.postUser)
module.exports=route; 