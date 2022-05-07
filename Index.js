const Reader = require('./lib/utils/Reader.js')
const ExplorerService = require("./lib/services/ExplorerService.js");


const explorer = Reader.readJsonFile("explorers.json")
console.log(explorer);


const explorersInNode = ExplorerService.filterByMission(explorer,"node")

console.log(explorersInNode);


const ExplorersQty = ExplorerService.getAmountOfExplorersByMission(explorer, "node")
console.log(ExplorersQty);


const explorersUserNames = ExplorerService.getExplorerUserNamesByMission(explorer, "node")
console.log(explorersUserNames);


