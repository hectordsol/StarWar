const axios = require("axios");
const films = require('./films.json');
module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Film");
        return response.data;
    },
    create: async(register)=>{
        const response = await axios.post("http://database:8004/Film",register);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:8004/Film/${id}`);
        return response.data;
    }
}