import { dbClient } from "@repo/db/client";

import { WebSocketServer } from "ws";


const server = new WebSocketServer({port:8080})


server.on("connection",async(ws)=>{

    const data = await dbClient.user.create({
        data:{
            "password":Math.random().toString(),
            "username":Math.random().toString()
        }

    })
    console.log(data)
    ws.send("You are connected to ws sevrer")
})
