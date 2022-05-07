const Reader = require('./lib/utils/Reader.js')
const ExplorerService = require("./lib/services/ExplorerService.js");
const FizzbuzzService = require("./lib/services/FizzbuzzService.js")


const explorer = Reader.readJsonFile("explorers.json")
console.log(explorer.length);
const filterExplorer = explorer.filter((filter) => filter.mission == "node")
console.log(filterExplorer.length);
const mapFile = explorer.map((data) => data.name);
// console.log(mapFile);





// const explorersInNode = ExplorerService.filterByMission(explorer,"node")

// console.log(explorersInNode);


// const ExplorersQty = ExplorerService.getAmountOfExplorersByMission(explorer, "node")
// console.log(ExplorersQty);


// const explorersUserNames = ExplorerService.getExplorerUserNamesByMission(explorer, "node")
// console.log(explorersUserNames);

// const explorers2 = {

//     name: 'Woopa15',
//     githubUsername: 'ajolonauta15',
//     score: 15,
//     mission: 'node',
//     stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],

// }


// const fizz = FizzbuzzService.appyValidationInExplorer(explorers2)

// console.log(fizz)


