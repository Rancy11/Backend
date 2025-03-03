const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));

let userData = [];

app.get("/adduser", (req,res)=>{
    res.sendFile(__dirname + "/register.html");
})

app.post("/adduser", (req,res)=>{
    let {name, email, password} = req.body;
    userData.push({name:name, email:email, password:password});
    console.log(userData);
    res.send(userData);
})

app.listen(3636, (req, res)=>{
    console.log("Server is listening");
})