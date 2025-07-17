const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT
const MONGOURI = process.env.MONGO_URI


app.use(express.json());

const PostsRouter = require('./postsRoute');
app.use("/api/posts", PostsRouter);
const usersRouter = require('./usersRoute');
app.use("/api/users", usersRouter);

const users = require('./template/users');
app.use("/users", users);

const posts = require('./template/posts');
app.use("/posts", posts);

app.get("/", (req, res) => {res.send(`<h1>Welcome to My Web App</h1>  <ul><li><a href="users/">users</a> - List all users</li> <li><a href="posts/">posts</a> - List all posts</li></ul>`);});


mongoose.connect(MONGOURI).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("Error in connecting to database",err)

});


app.listen(PORT,"127.0.0.1",()=>{
    console.log("someOne opened your web app")
})