const express=require('express')
const app=express();
app.use(express.json());

const cartRoute=require('./routes/cartRoute.js')
const usersRoute=require('./routes/userRoute.js')
const productRoute=require('./routes/productRoute.js')


app.use('/cart',cartRoute)
app.use('/users',usersRoute)
app.use('/products',productRoute)


app.use((req,res)=>{

    res.send("Page not found")

})



app.listen(3000,()=>{

    console.log('server started')

})