const express=require('express');

const app=express();

// ab (anything) cd
// works for /abcd, /abefhsdcscd, /abanythingcd
app.get("/ab*cd", (req,res)=>{
    res.send({firstname:"Keerthika",lastname:"Panchika"});
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});