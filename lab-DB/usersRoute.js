const express = require("express");
const usersRouter = express.Router()
const {Usermodel} = require("./models")


usersRouter.get("/",async(req,res)=>{
    users = await Usermodel.find()
    res.status(200).json(users)
})


usersRouter.get("/:id",async(req,res)=>{
    const id = req.params.id
    user = await Usermodel.findById(id)
    const {_id,username} = user
    res.status(200).json({_id,username})
})



usersRouter.post("/",async(req,res)=>{
    const {username,password}=req.body
    const userx = new Usermodel({ username, password })
    try{
        saved = await userx.save()
        const {_id} = saved
        res.json({_id,username})
    }catch(err){
        console.log(err)
        res.status(404).json(err)
    }
})



usersRouter.put("/:id",async(req,res)=>{
    const {username,password}=req.body;
    try{
        let updateduser = await Usermodel.findByIdAndUpdate(req.params.id,{username,password});
        if(!updateduser) return res.status(404).json({Message:"user not found"});
    }catch(err){console.log(err)}
    res.json({ message: "user updated successful" });
});




usersRouter.patch("/:id",async(req,res)=>{
    const {username,password}=req.body;
    try{
        let updated = {};
        if(username){updated.username=username}
        if(password){updated.password=password}
        let updateduser = await Usermodel.findByIdAndUpdate(req.params.id,updated);
        if(!updateduser) return res.status(404).json({Message:"user not found"});
    }catch(err){console.log(err)}
    res.json({ message: "user updated successful" });
});




usersRouter.delete("/:id",async(req,res)=>{
    const user = await Usermodel.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "user not found" });
    res.json({ message: "user deleted" });
});


module.exports = usersRouter