const express = require("express")
const app = express()

const port = 3000



app.get('/',(req,res) => {
    res.send("defauld url in express server")
})

app.listen(port,() => {
    console.log(`server is on and listening by the port ${port}`);
})