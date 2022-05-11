
class FizzbuzzService{

    static appyValidationInExplorer(explorer){

        if(explorer.score%5 === 0 && explorer.score%3 === 0){

            explorer.trick = "FIZZBUZZ";
            return explorer;
        }

        else if(explorer.score%3 === 0){

            explorer.trick = "FIZZ";
            return explorer;
        }

       

        else if(explorer.score%5 === 0){

            explorer.trick = "BUZZ";
            return explorer;
        }

        else{

            explorer.trick = explorer.score;
            return explorer;
        }


    }

    static appyValidationInNumber(number){

        
        if(number%5 === 0 && number%3 === 0){

            const feedBack = "FIZZBUZZ";
            return  feedBack;
        }

        else if(number%3 === 0){

            const feedBack = "FIZZ";
            return  feedBack;
            
        }

       

        else if(number%5 === 0){

            const feedBack = "BUZZ";
            return  feedBack;

        }
           

        else{

            const feedBack = number;
            return feedBack;
        }



    }
}


module.exports = FizzbuzzService;