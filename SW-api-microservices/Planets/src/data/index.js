const axios = require("axios");
const planets = require('./planets.json');
module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Planet");
        return response.data;
    },
    create: async(planet)=>{
        const response = await axios.post("http://database:8004/Planet",planet);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:8004/Planet/${id}`);
        return response.data;
    }
}