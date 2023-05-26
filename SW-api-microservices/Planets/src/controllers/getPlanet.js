const Planet = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const planet = await Planet.get(id);
    let statusCode;
    planet?statusCode=200:statusCode=404;
    response(res,statusCode,planet);
}