const Character = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const character = await Character.get(id);
    let statusCode;
    character?statusCode=200:statusCode=404;
    response(res, statusCode, character);
}