const FizzbuzzService = require("../../lib/services/FizzbuzzService.js")



describe("these are fizzbuzzservices tests",() =>{

    test("1.- appyValidationInExplorer test FIZZ ",() =>{

        const explorer = {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ]

            } 

        const firstcase = FizzbuzzService.appyValidationInExplorer(explorer)
        expect(firstcase.trick).toBe( 

            "FIZZ"

        )
    });


    test("2.- appyValidationInExplorer test FIZZ ",() =>{

        const explorer = {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ]

            } 

        const firstcase = FizzbuzzService.appyValidationInExplorer(explorer)
        expect(firstcase).toEqual( 

            {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ],
                "trick": "FIZZ"

            } 
        )
    });

    test("3.- appyValidationInExplorer test BUZZ ",() =>{

        const explorer = {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 5,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ]

            } 

        const firstcase = FizzbuzzService.appyValidationInExplorer(explorer)
        expect(firstcase).toEqual( 

            {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 5,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ],
                "trick": "BUZZ"

            } 
        )
    });
    test("4.- appyValidationInExplorer test FIZZBUZZ ",() =>{

        const explorer = {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 15,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ]

            } 

        const firstcase = FizzbuzzService.appyValidationInExplorer(explorer)
        expect(firstcase).toEqual( 

            {
            
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 15,
                "mission": "node",
                "stacks": [
                "elixir",
                "groovy",
                "reasonML" ],
                "trick": "FIZZBUZZ"

            } 
        )
    });
});