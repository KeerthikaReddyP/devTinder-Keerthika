const express=require('express');

const app=express();

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
});
// Our server is listening at port 3000. But, we're not handling incoming requests