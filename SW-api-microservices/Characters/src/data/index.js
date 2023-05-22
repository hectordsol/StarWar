const axios = require("axios");
const characters = require('./characters.json');
module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Character");
        return response.data;
    },
    create:async()=>{
        throw Error('Hay error');
    }
}