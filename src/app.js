const express=require('express');

const app=express();

// Here, b is optional
// works for /abc, /ac
app.get("/ab?c", (req,res)=>{
    res.send({firstname:"Keerthika",lastname:"Panchika"});
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});