const express=require('express');

const app=express();

app.use("/user",(req,res,next)=>{
    console.log("Handling the route user");
    next();
    res.send("Response");
}, (req,res)=>{
    console.log("Handling the route user 2");
    res.send("Response-2");
}, (req,res)=>{
    console.log("Handling the route user 3");
    res.send("Response-3");
}, (req,res)=>{
    console.log("Handling the route user 4");
    res.send("Response-4");
}, (req,res)=>{
    console.log("Handling the route user 5");
    res.send("Response-5");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});