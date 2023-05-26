const Character = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const register = await Character.list();
    let statusCode;
    register?statusCode=201:statusCode=404;
    response(res, statusCode, register);
}