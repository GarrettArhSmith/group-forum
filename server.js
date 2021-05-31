const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()
require("dotenv").config()
const path = require("path")

const port = process.env.PORT || 9000

app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "client", "build")))

//connect to the forum database
mongoose.connect(process.env.MONGODB_URI,
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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port 9000")
})