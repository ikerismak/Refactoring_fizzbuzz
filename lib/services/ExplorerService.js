

class ExplorerService{

    static filterByMission(explorers,mission){

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission) 
       
        return explorersByMission

    }

    static getAmountOfExplorersByMission(explorers,mission){

        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission) 
        
        return explorersByMission.length

    }

    static getExplorerUserNamesByMission(explorers,mission){

        const explorersByName = explorers.filter((explorer) => explorer.mission == mission)
        const explorerRecord = explorersByName.map((explorer) => explorer.githubUsername) 

        return explorerRecord 

    }
}




module.exports = ExplorerService