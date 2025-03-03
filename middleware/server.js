const express= require("express");
const app= express();

app.get("/", (req,res)=>{
    res.send("server is running...");
})

function middleware1(req,res,next) {
    console.log("running m1");
    next();
}

function middleware2(req,res,next) {
    console.log("running m2")
    next();
}

function middleware4(req,res,next


    
){
    console.log("running middleware 4");
    next();
}

app.get("/about", middleware4,(req,res)=>{
    res.send("running in about");
})

app.listen(4260,()=>{
    console.log("server is running..")
})

app.use(middleware1);
app.use(middleware2);