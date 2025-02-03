const express=require('express');

const app=express();

app.use("/user",(req,res,next)=>{
    console.log("Handling the route user");
    next();
    res.send("Response");
}, (req,res)=>{
    console.log("Handling the route user 2");
    res.send("Response-2");
});
// This will give "Response" (First route handler)

// But what if we comment res.send on first route handler?
// Will it go to 2nd?
// No. It will give nothing as response.

// How to go to 2nd route handler then??
// next()

// What if we keep res.send in first route handler?
// It will give first response in postman.
// But also an error in the console. Bcz, we've already sent a response to the client.

// What if next() is before res.send?
// This will give Response-2 in postman.
// Also, two console logs and an error in the console.

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});