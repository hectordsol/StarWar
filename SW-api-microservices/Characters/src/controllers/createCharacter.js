const Character = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const character = req.body;
    const newCharacter = await Character.create(character);
    response(res,201,newCharacter);
}