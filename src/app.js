const express=require('express');

const app=express();

// Keeping this route (/) on top of other
// This will give the same response (Hi there..) for all the routes like /hello, /test, /xyz(which we didn't even define)
// app.use("/",(req,res)=>{
//     res.send("Hi thereee...");
// });

app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
});
// It'll give the same response for '/test' and '/test/anything'

app.use("/hello",(req,res)=>{
    res.send("Hello hello hello!");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});