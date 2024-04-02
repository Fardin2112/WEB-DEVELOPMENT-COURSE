import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hey bro i am working from responce")
})

app.get("/about",(req,res)=>{
    res.send("hey bro i am working from responce from about ")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}.`)
})