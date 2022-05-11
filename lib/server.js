const express = require("express")
const app = express()
const ExplorerController = require('./../lib/controllers/ExplorerControllers.js')

const port = 3000



app.get('/',(req,res) => {
    res.send("defauld url in express server")
})

app.listen(port,() => {
    console.log(`server is on and listening by the port ${port}`);
})



app.get('/v1/explorers/:mission',(req,res)=>{
    const mission = req.params.mission
    const explorerMission = ExplorerController.getExplorerBymission(mission);
    res.json(explorerMission)
});


app.get('/v1/explorers/amount/:mission',(req,res)=>{

    const mission = req.params.mission

    const explorersAmountInMission = ExplorerController.getExplorerAmountByMission(mission);

    res.json({mission: req.params.mission, quantity: explorersAmountInMission});
    
});

app.get('/v1/explorers/usernames/:mission',(req,res)=>{

    const mission = req.params.mission

    const explorersNamesInMission = ExplorerController.getExplorersUsernameByMission(mission);

    res.json({mission: mission , explorers: explorersNamesInMission});
    
});

app.get('/v1/fizzbuzz/:score',(req,res)=>{

    const score = req.params.score

    const FizzBuzzByScore = ExplorerController.ExplorerController(score);

    res.json({score: score, trick: FizzBuzzByScore});
    
});