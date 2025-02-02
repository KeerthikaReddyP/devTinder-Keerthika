const express=require('express');

const app=express();

// This will match for all the GET calls
// with routes /user, /user/xyz, /user/anything, /user/1
app.get("/abc", (req,res)=>{
    res.send({firstname:"Keerthika",lastname:"Panchika"});
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});