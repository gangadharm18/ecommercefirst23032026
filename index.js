const express=require('express')
const app=express();
app.use(express.json());
const path=require('path')
const {sendErrorResponse,sendResponse}=require('./utils/response.js')

app.use(express.static(path.join(__dirname, "public")));


const cartRoute=require('./routes/cartRoute.js')
const usersRoute=require('./routes/userRoute.js')
const productRoute=require('./routes/productRoute.js')



app.use('/cart',cartRoute)
app.use('/users',usersRoute)
app.use('/api/products',productRoute)


app.use((req,res)=>{

   // res.send("Page not found")
   sendErrorResponse(res,{message:"Page not found",statusCode:404})

})



app.listen(3000,()=>{

   console.log('server started')

})