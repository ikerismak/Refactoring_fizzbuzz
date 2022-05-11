const Reader = require("./../../lib/utils/Reader.js");
const FizzbuzzService = require("./../services/FizzbuzzService.js");
const ExplorerService = require("./../services/ExplorerService.js");




class ExplorerController {

    static getExplorerBymission(mission){
        
        const ExplorersByMission = Reader.readJsonFile("explorers.json");
        const FilteredList = ExplorerService.filterByMission(ExplorersByMission,mission);

        return FilteredList;
    }

    static getExplorersUsernameByMission(mission){

        const ExplorersByMission = Reader.readJsonFile("explorers.json");
        const FilteredList = ExplorerService.filterByMission(ExplorersByMission,mission);
        const ExplorerUsernamesByMission = ExplorerService.getExplorerUserNamesByMission(FilteredList,mission);

        return ExplorerUsernamesByMission;

    }

    static getExplorerAmountByMission(mission){

        const ExplorersByMission = Reader.readJsonFile("explorers.json");
        const FilteredList = ExplorerService.filterByMission(ExplorersByMission,mission);
        const AmountByMission = ExplorerService.getAmountOfExplorersByMission(FilteredList,mission);
        return AmountByMission;

    }

    static ExplorerController(number){

        const trickByScore = FizzbuzzService.appyValidationInNumber(number)
        return(trickByScore)

        
    }
}


module.exports = ExplorerController;
