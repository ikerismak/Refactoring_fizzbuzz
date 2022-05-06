const fs = require("fs");

class Reader{

    static readJsonFile(filepath){

        const rawdata = fs.readFileSync(filepath);
        return JSON.parse(rawdata);

    }
}


module.exports = Reader