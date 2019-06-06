const fs = require('fs').promises;

const fetchJSON = async (path) => {
    const data = await fs.readFile(path);
    return JSON.parse(data.toString());
};

const saveJSON = async (path, data) => {
    try{
        const JSONdata =  JSON.stringify(data);
        await fs.writeFile(path, JSONdata);
    } catch(e){
        console.log(e);
    }
};

module.exports = {fetchJSON, saveJSON};