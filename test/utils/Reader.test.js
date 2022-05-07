
const Reader = require("./../../lib/utils/Reader.js")



describe("Unit tests for Reader class class", () => {

    test("1)-. Test to match the lenght", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        expect(explorer.length).toBe(15)
    });

    test("2)-. Test for read the names in explorers json", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        const mappingExplorersName = explorer.map((mapper) => mapper.name)
        expect(mappingExplorersName).toEqual([

            'Woopa1',  'Woopa2',
            'Woopa3',  'Woopa4',
            'Woopa5',  'Woopa6',
            'Woopa7',  'Woopa8',
            'Woopa9',  'Woopa10',
            'Woopa11', 'Woopa12',
            'Woopa13', 'Woopa14',
            'Woopa15'
        ]
   
        )
    });

    test("3)-. Test to filter by mission",() => {

        const explorer = Reader.readJsonFile("explorers.json");
        const listFilteredByMission = explorer.filter((filter) => filter.mission == "node")
        expect(listFilteredByMission.length).toBe(10)


    })


});