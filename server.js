const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()


app.use(express.json())
app.use(morgan("dev"))

//connect to the forum database
mongoose.connect("mongodb://localhost:27017/forumdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database")
)

app.use("/games", require("./routes/gamesRouter"))
app.use("/movies", require("./routes/moviesRouter"))
app.use("/music", require("./routes/musicRouter"))

//global error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("server is running on port 9000")
})