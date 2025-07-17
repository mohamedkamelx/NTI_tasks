const express = require("express")
const users = express.Router()
const fs = require("fs")
const path = require("path")
const filePath = path.join(__dirname, "users.html");
const html = fs.readFileSync(filePath, "utf8")

users.get('/',(req,res)=>{
    res.send(html)
})

module.exports = users