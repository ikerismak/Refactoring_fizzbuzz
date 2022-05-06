const Reader = require("../utils/Reader.js")

class ExplorerService{

    static filterByMission(explorers,mission){

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission) 
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorer,mission){

    }

    static getExplorerUserNamesByMission(explorer,mission){


    }
}




module.exports = ExplorerService