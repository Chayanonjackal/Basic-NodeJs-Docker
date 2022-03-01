const express = require('express');


let app =express()

app.get("/", (req,res) => {
    res.send("Hello myApp")
})
app.get("/hello", (req,res) => {
    res.send("Hello World")
})

app.listen(8000,() => {
    console.log("Server Start Port : 8000");
})