const express = require("express");
require('dotenv').config();
const DBConnection = require("./config/db");
const userRouter = require("./routes/user.routes");
const noteRouter = require("./routes/note.routes");




const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

//user 
app.use("/user", userRouter)

//note
app.use("/notes", noteRouter)


app.use((req,res)=>{
    res.send("this route is not defined")
})
const PORT = process.env.PORT 
app.listen(PORT, async () => {
    try {
        await DBConnection()
        console.log("server is running");
    } catch (error) {
      console.log(error);
    }


})