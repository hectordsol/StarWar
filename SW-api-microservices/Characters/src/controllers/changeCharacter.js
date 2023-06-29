const Character = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const character = req.body;
    const changedCharacter = await Character.change(id,character);
    let statusCode;
    changedCharacter?statusCode=200:statusCode=404;
    response(res, statusCode, changedCharacter);
}