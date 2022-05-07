const ExplorerService = require("./../../lib/services/ExplorerService.js");


describe("Unit tests for ExplorerService class", () => {

    test("1.) Test for FilterByMission()", () => {
        const explorers = [
            {name: "Iker", mission: "node"},
            {name: "Carlo", mission: "java"},
            {name: "Diego", mission: "node"}
        ];
        const filteredExplorers = ExplorerService.filterByMission(explorers, "node");
        expect(filteredExplorers).toEqual(
            [
                {name: "Iker", mission: "node"},
                {name: "Diego", mission: "node"}
            ]
        );
    });

    test("2.) Test for getAmountOfExplorersByMission()", () => {
        const explorers = [
            {name: "Iker", mission: "node"},
            {name: "Carlo", mission: "node"},
            {name: "Diego", mission: "node"}
        ];
        const amountBymission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountBymission).toBe(3);
        
    });

    test("3.) Test for FilterByMission()", () => {
        const explorers = [
            {
                name: 'Woopa15',
                githubUsername: 'ajolonauta15',
                score: 15,
                mission: 'node',
                stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                trick: 'FIZZ'
              },
              {
                name: 'Woopa15',
                githubUsername: 'ajolonauta13',
                score: 15,
                mission: 'node',
                stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                trick: 'FIZZ'
              }
        ]

        const namesbyMission = ExplorerService.getExplorerUserNamesByMission(explorers, "node");
        console.log(namesbyMission);
        expect(namesbyMission).toEqual([

            'ajolonauta15',
            'ajolonauta13'
        ]

        )     
    });

    test("4.) Test for FilterByMission()", () => {
        const explorers = [
            {
                name: 'Woopa15',
                githubUsername: 'ajolonauta15',
                score: 15,
                mission: 'node',
                stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                trick: 'FIZZ'
              },
              {
                name: 'Woopa15',
                githubUsername: 'ajolonauta13',
                score: 15,
                mission: 'node',
                stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ],
                trick: 'FIZZ'
              }
        ]

        const namesbyMission = ExplorerService.getExplorerUserNamesByMission(explorers, "node");
        expect(namesbyMission.length).toBe(2)
        expect(namesbyMission).toEqual([

            'ajolonauta15',
            'ajolonauta13'
        ]

        )     
    });
    
});