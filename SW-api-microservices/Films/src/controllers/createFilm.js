module.exports = (req, res) => {
    res.status(200).send('create Film');
}
const Film = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const film = req.body;
    const newFilm = await Film.create(film);
    response(res,201,newFilm);
}