const axios = require("axios");
const planets = require('./planets.json');
module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Planet");
        return response.data;    },
    create:async()=>{
        throw Error('Hay error');
    }
}