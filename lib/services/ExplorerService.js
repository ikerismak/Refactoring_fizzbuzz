const Reader = require("../utils/Reader.js")

class ExplorerService{

    static filterByMission(explorers,mission){

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission) 
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers,mission){

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission) 
        return explorersByMission.length

       


    }

    static getExplorerUserNamesByMission(explorer,mission){


    }
}




module.exports = ExplorerService