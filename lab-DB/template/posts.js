const express = require("express")
const posst = express.Router()
const fs = require("fs")
const path = require("path")
const filePath = path.join(__dirname, "posts.html");
const html = fs.readFileSync(filePath, "utf8")

posst.get('/',(req,res)=>{
    res.send(html)
})
module.exports = posst