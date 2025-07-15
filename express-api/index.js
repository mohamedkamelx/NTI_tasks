const express = require("express");

const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/data.json`,'utf-8');
let posts = JSON.parse(data);

const app = express();
const PORT = 8000;

app.use(express.json());




app.get('/',(req,res)=>{
    res.status(200).json(posts);
});

app.get('/:id',(req,res)=>{
    const Id = parseInt(req.params.id);
    if(isNaN(Id)){res.status(404).send("not valid data")};
    const post = posts.find(p=>p.id==Id);
    if(!post){res.status(404).send("post not found")};
    res.status(200).json(post);
});

app.post('/',(req,res)=>{
    const {body} = req;
    let id = posts[posts.length-1].id + 1;
    const newpost = {id:id,...body};
    posts.push(newpost);
    fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2));
    res.status(200).json(newpost);
});

app.put('/:id',(req,res)=>{
    const Id = parseInt(req.params.id);
    const {body} = req;
    if(isNaN(Id)){res.status(404).send("not valid data")};
    let found = false;
    for (let i = 0; i < posts.length; i++){
        if (posts[i].id == Id) {
            posts[i] = {id:Id, ...body} ;   
            found = true;
            fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2));
            res.status(200).json(posts[i]);
        }
    }
    if(!found){res.status(404).send("post not found")};
});

app.patch('/:id',(req,res)=>{
    const Id = parseInt(req.params.id);
    const {body} = req;
    if(isNaN(Id)){res.status(404).send("not valid data")};
    let found = false;
    for (let i = 0; i < posts.length; i++){
        if (posts[i].id === Id) {
            posts[i] = {id:Id, ...posts[i],...body} ;   
            found = true;
            fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2));
            res.status(200).json(posts[i]);
        }
    }
    if(!found){res.status(404).send("post not found")};
});

app.delete('/:id',(req,res)=>{
    const Id = parseInt(req.params.id);
    if(isNaN(Id)){res.status(404).send("not valid data")};
    let found = false;
    for (let i = 0; i < posts.length; i++){
        if (posts[i].id === Id) {
            posts.splice(i,1);
            found = true;
            fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2));
            res.status(200).json(posts);
        }
    }
    if(!found){res.status(404).send("post not found")};
});
app.listen(PORT,'127.0.0.1',()=>{});