import {dbClient} from "@repo/db/client"
import express from "express"



const app = express()

app.get("/",(req,res)=>{
    res.send("Jey")
})


app.post("/user",async (req,res)=>{


    try{
        const username = req.body.username
        const pass = req.body.password
    
        await dbClient.user.create({
            data:{
                username:username,
                password:pass
            }
        })
    
        res.status(200).json({message:"User created"})
    }catch{
        res.status(404).json({message:"User not created"})

    }

})

app.listen(300)




