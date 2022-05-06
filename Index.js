const Reader = require('./lib/utils/Reader.js')

const explorer = Reader.readJsonFile("explorers.json")
console.log(explorer);