const axios = require("axios");
const characters = require('./characters.json');
module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Character");
        return response.data;
    },
    create: async(character)=>{
        const response = await axios.post("http://database:8004/Character",character);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:8004/Character/${id}`);
        return response.data;
    },
    change: async(id,character)=>{
        const response = await axios.put(`http://database:8004/Character/${id}`,character);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:8004/Character/${id}`);
        return response.data;
    }
}