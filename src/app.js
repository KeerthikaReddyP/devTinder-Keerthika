const express=require('express');

const app=express();

app.use("/user",(req,res)=>{
    // res.send("jhg");
    //What if we dont send any response from the server?
    // It just says sending request.. (like infinite loop)
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});