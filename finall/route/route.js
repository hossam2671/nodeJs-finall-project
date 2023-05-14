const express = require('express')
const cors = require('cors')
const Use=require('../models/user');
const blogs = require('../models/blog');
const path=require('path');
const multer = require('multer')
const date = require('date-and-time')
const fileStorage = multer.diskStorage({
destination:(req,file,callbackfun)=>{
console.log(req,file);
callbackfun(null,'Home/assets/images/')
},
filename :(req,file,cb)=>{
cb(null,Date.now()+file.originalname.replaceAll(" ",""))}})
const cookieParser = require('cookie-parser');
const upload = multer({storage:fileStorage})
const route=express.Router();
const jwt=require('jsonwebtoken')
const key = "fatma"

route.use(express.static(path.join(__dirname, '../Login')));
route.use(express.static(path.join(__dirname, '../Home')));
// route.use(cors())
route.use(express.urlencoded({extend:true}))
route.use(express.json())
route.use(cookieParser())
route.post('/register',async function(req,res)
{
let us= await Use.create({
userName:req.body.uname,
password:req.body.pass,
email:req.body.email,
})
res.redirect('/user/login')
})
route.get('/login',async function(req,res){
    let pathfile=path.join(__dirname,"../Login/login.html");
res.sendFile(pathfile);
})
route.post('/login',async function(req,res)
{
    
    let us= await Use.findOne({
        password:req.body.pass,
        email:req.body.email,
    })
    if(us){
    let payload = { userId: us._id };
    let token = jwt.sign(payload, key);
    //res.send(token);
     res.cookie('token', token, { maxAge: 90000000000000, httpOnly: true });
    
    res.redirect("/user/home")
    
    }
})
route.get('/home',async function(req,res){
    let pathfile=path.join(__dirname,`../Home/index.html`);
    res.sendFile(pathfile);
})
route.get('/home/:search',async function(req,res){
    let pathfile=path.join(__dirname,`../Home/index.html`);
    res.sendFile(pathfile);
})
route.get('/profile',async function(req,res){
    let pathfile=path.join(__dirname,`../Home/profile.html`);
    res.sendFile(pathfile);
})
route.get('/blogs',async function(req,res)
{
let us= await blogs.find({})
res.send(us)
})
route.get('/blog',async function(req,res)
{
    
    let decoded = jwt.verify(req.cookies.token, key);
 let us= await Use.findById(decoded.userId)
 let x = us._id
 let u = await blogs.find({"publisher._id":x})
res.send(u)
})
route.post('/addblog',upload.single("image"),async function(req,res)
{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var now  = new Date();
let time =now.toLocaleDateString("en-US", options)
console.log(time);
    let decoded = jwt.verify(req.cookies.token, key);
   
    let uses = await Use.findOne({_id:decoded.userId})
    
    let us= await blogs.create({
        title:req.body.title,
        description:req.body.description,
        tags:req.body.tags,
        image:req.file.filename,
        publisher:uses,
        date: time
    })
    res.redirect("/user/home")
 
})


  route.delete('/delete/:id', async function(req, res) {
    let us = await blogs.deleteOne({"_id": req.params.id})
    res.redirect("/user/profile")
  })
  route.get('/get/:id', async function(req, res) {
    let us = await blogs.find({"_id": req.params.id})
    // res.redirect("/user/profile")
    res.send(us)
  })

route.post('/search', async (req, res) => {
    console.log(req.body.title);

      const blog = await blogs.find( { $or: [ { title: {$regex: req.body.title , '$options' : 'i'}  }
      , { description: {$regex: req.body.title, '$options' : 'i'} },
      { 'publisher.userName': {$regex: req.body.title, '$options' : 'i'} } ] } )  
      res.send(blog)

  
  });
  route.post('/update',async function(req,res)
{
    const filter = { _id: req.body.id }
    const updatee = { title: req.body.title, description: req.body.desc };
        let update= await blogs.findOneAndUpdate(filter,updatee);
  res.send("updated");

})
module.exports=route;