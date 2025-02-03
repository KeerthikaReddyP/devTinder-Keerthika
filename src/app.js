const express=require('express');

const app=express();

app.use("/user",(req,res)=>{
    console.log("Handling the route user");
    // res.send("Response");
}, (req,res)=>{
    console.log("Handling the route user 2");
    res.send("Response-2");
});
// This will give "Response" (First route handler)

// But what if we comment res.send on first route handler?
// Will it go to 2nd?
// No. It will give nothing as response.

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});