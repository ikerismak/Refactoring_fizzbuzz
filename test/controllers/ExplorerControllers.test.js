const ExplorerController = require("../../lib/controllers/ExplorerControllers.js");



describe("these are controllers test",() =>{

    test("1).- Test to get a list of explorers by mision",()=> {


        const explorersByMission = ExplorerController.getExplorerBymission("node");
        const mappingArray = explorersByMission.map((element) => element.mission);
        const missionConfirmed = mappingArray.includes("node");
        expect(missionConfirmed).toBe(true);      

    });

    
    test("2).- Test to get a list of explorers names by mision",()=> {

        const explorersNamesByMission = ExplorerController.getExplorersUsernameByMission("node");
        const missionNamesConfirmed = explorersNamesByMission.includes("ajolonauta1");
        expect(missionNamesConfirmed).toBe(true);      

    });


    test("3 ).- Test to get the amount of explorers by mision",()=> {

        const amountExplorersNamesByMission = ExplorerController.getExplorerAmountByMission("node");
        expect(amountExplorersNamesByMission).toBe(10);
       

    });
    
});