const Reader = require('./lib/utils/Reader.js')
const ExplorerService = require("./lib/services/ExplorerService.js");


const explorer = Reader.readJsonFile("explorers.json")
console.log(explorer);


const explorersInNode = ExplorerService.filterByMission(explorer,"node")

console.log(explorersInNode.length);