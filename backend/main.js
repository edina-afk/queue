import express from "express";
import bcrypt from "bcrypt"
const app = express();
app.use(express.json())
const users = []
app.get("/users",(req,res)=>{
    res.send(users)
})
app.post("/users",async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password,salt)
        console.log(salt)
        console.log(hashPassword)
        const user = {username:req.body.username,password:hashPassword}
        users.push(user)
        res.status(201).send()
    } catch (error) {
        console.log("error")
    }
})
app.listen(5000)