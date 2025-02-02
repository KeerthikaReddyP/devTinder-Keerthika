const express=require('express');

const app=express();

// This will match or handle only GET call to /user
app.get("/user", (req,res)=>{
    res.send({firstname:"Keerthika",lastname:"Panchika"});
});

app.post("/user",(req,res)=>{
    //Code to save data to the database
    res.send("Data saved successfully to the database!");
});
// This will match all the HTTP methods
app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});