const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true 
    }
});

const PostSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    }
});

module.exports = {Usermodel:mongoose.model("User",UserSchema),Postmodel:mongoose.model("Post",PostSchema)}