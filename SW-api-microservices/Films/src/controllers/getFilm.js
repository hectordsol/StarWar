const Film = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const film = await Film.get(id);
    let statusCode;
    film?statusCode=200:statusCode=404;
    response(res,statusCode,film);
}