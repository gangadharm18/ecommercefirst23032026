const path=require('path')

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
  res.send(`Fetching user with ID ${userId}: ${user.name}`)
 }else {
    res.send('user not found')
 }
 
}
//post
const postUser=(req,res)=>{
  const newUser=req.body.name;
  users.push(newUser)
  res.status(201).send(`Adding a new user ${newUser}`)
}

module.exports={
    getallUsers,
    getuserById,
    postUser
}