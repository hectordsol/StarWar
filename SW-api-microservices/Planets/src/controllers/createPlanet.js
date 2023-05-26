const Planet = require('../data');

const {response} = require('../utils');

module.exports = async (req, res) => {
    const planet = req.body;
    const newPlanet = await Planet.create(planet);
    response(res,201,newPlanet);
}