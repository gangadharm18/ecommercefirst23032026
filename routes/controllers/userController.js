const getallUsers=(req,res)=>{
 
 res.send(`Fetching all users`)
}
//by id
const getuserById=(req,res)=>{
 const userId=parseInt(req.params.id)
 res.send(`Fetching user with ID: ${userId}`)
}
//post
const postUser=(req,res)=>{
  res.status(201).send(`Adding a new user`)
}

module.exports={
    getallUsers,
    getuserById,
    postUser
}