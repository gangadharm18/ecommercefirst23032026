const path=require('path')
const {sendErrorResponse,sendResponse}=require('../utils/response')

const users=[
    {
        id:1,
        name:"ravi"
    }
];
const getallUsers=(req,res)=>{
 
 res.sendFile(path.join(__dirname,"..","views","getAllUsers.html"))
 

}
//by id
const getuserById=(req,res)=>{
 const userId=parseInt(req.params.id)
 const user=users.find(u=>u.id===userId)
 if(user){
//   res.send(`Fetching user with ID ${userId}: ${user.name}`)
     sendResponse(res,200,user)
 }else {
    // res.send('user not found')
    sendErrorResponse(res,{message:"user not found",statusCode:404})
 }
 
}
//post
const postUser=(req,res)=>{
  const newUser=req.body.name;
  users.push(newUser)
//   res.status(201).send(`Adding a new user ${newUser}`)
    sendResponse(res,201,newUser)
}

module.exports={
    getallUsers,
    getuserById,
    postUser
}