const Reader = require('./lib/utils/Reader.js')
const ExplorerService = require("./lib/services/ExplorerService.js");
const FizzbuzzService = require("./lib/services/FizzbuzzService.js")


const explorer = Reader.readJsonFile("explorers.json")
console.log(explorer);


const explorersInNode = ExplorerService.filterByMission(explorer,"node")

console.log(explorersInNode);


const ExplorersQty = ExplorerService.getAmountOfExplorersByMission(explorer, "node")
console.log(ExplorersQty);


const explorersUserNames = ExplorerService.getExplorerUserNamesByMission(explorer, "node")
console.log(explorersUserNames);

const explorers2 = [{

    name: 'Woopa15',
    githubUsername: 'ajolonauta15',
    score: 15,
    mission: 'node',
    stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],

}]


const fizz = explorers2.map((explorers) => FizzbuzzService.appyValidationInExplorer(explorers))
console.log(fizz);


