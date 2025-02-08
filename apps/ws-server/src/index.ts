import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";

const wss = new WebSocketServer({port:8085});

wss.on("connection",async(socket)=>{
    await prismaClient.user.create({
        data:{
            name:Math.random().toString(),
            email:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    socket.send("Connected!")
})