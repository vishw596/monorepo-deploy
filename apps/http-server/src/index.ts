import { prismaClient } from "@repo/db/client";
import express from "express";

const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hi there");
})
app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    const result = await prismaClient.user.create({
        data:{
            email,password,name
        }
    })
    res.json({
        msg:"Signed Up!"
    })
})
app.listen(3002,()=>console.log("App is listening on PORT 3002")
)