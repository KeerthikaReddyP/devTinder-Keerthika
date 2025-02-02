const express=require('express');

const app=express();

// This will match or handle only GET call to /user
app.get("/user", (req,res)=>{
    res.send({firstname:"Keerthika",lastname:"Panchika"});
});

// This will match all the HTTP methods
app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});