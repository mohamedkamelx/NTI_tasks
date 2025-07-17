const express = require("express")
const PostsRouter = express.Router()
const {Postmodel, Usermodel} = require("./models")

PostsRouter.get("/",async(req,res)=>{
    posts = await Postmodel.find().populate("userId", "username");
    res.status(200).json(posts)
})


PostsRouter.get("/:id",async(req,res)=>{
    const id = req.params.id
    post = await Postmodel.findById(id).populate("userId", "username");
    res.status(200).json(post)
})



PostsRouter.get("/user-posts/:username",async(req,res)=>{
    const username = req.params.username
    let id = await Usermodel.findOne({ username: req.params.username })
    id = id._id
    let posts = await Postmodel.find({userId:id}).populate("userId", id);
    res.status(200).json(posts)
})



PostsRouter.post("/",async(req,res)=>{
    const postx = new Postmodel(req.body)
    try{
        saved = await postx.save()
        res.json(saved)
    }catch(err){
        console.log(err)
        res.status(404).json(err)
    }
})



PostsRouter.put("/:id",async(req,res)=>{
    try{
        let updatedpost = await Postmodel.findByIdAndUpdate(req.params.id,req.body);
        if(!updatedpost) return res.status(404).json({Message:"post not found"});
    }catch(err){console.log(err)}
    res.json({ message: "post updated successful" });
});




PostsRouter.patch("/:id",async(req,res)=>{
    const {title,body}=req.body;
    try{
        let updated = {};
        if(title){updated.title=title}
        if(body){updated.body=body}
        let updatedpost = await Postmodel.findByIdAndUpdate(req.params.id,updated);
        if(!updatedpost) return res.status(404).json({Message:"post not found"});
    }catch(err){console.log(err)}
    res.json({ message: "post updated successful" });
});




PostsRouter.delete("/:id",async(req,res)=>{
    const post = await Postmodel.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "post not found" });
    res.json({ message: "post deleted" });
});


module.exports = PostsRouter