const Character = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const register = req.body;
    const newCharacter = await Character.create(register);
    response(res,201,newCharacter);
}