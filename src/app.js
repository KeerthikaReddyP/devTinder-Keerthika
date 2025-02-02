const express=require('express');

const app=express();

// Here you can as many "b"s as you want. a and c are must
// works for /abc, /abbc, /abbbbbbbbc ...
app.get("/ab+c", (req,res)=>{
    res.send({firstname:"Keerthika",lastname:"Panchika"});
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});