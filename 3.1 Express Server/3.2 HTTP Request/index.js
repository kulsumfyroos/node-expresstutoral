import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=> {
    console.log(req,rawheaders);
});

app.listen(port,()=> {
    console.log('server started on port ${port}');
});