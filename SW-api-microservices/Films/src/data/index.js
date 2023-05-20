const axios = require("axios");
const films = require('./films.json');
module.exports = {
    list: async () => {
        const response = await axios.get("http://localhost:8004/Film");
        return response.data;
    },
    create:async()=>{
        throw Error('Hay error en films');
    }
}