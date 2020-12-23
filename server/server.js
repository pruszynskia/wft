const express = require("express")

const PORT = 3001

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
    console.log("hello world")
});

app.listen(PORT, () => {
    console.log(`app listening at:\nhttp:\\\\localhost:${PORT}`)
})