const express = require("express");
const DBConnection = require("./config/db");
const userRouter = require("./routes/user.routes");
const noteRouter = require("./routes/note.ROUTES.JS");




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

app.listen(8080, async () => {
    try {
        await DBConnection()
        console.log("server is running");
    } catch (error) {
      console.log(error);
    }


})