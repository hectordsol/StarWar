
const {catchedAsync}= require('../utils');

module.exports={
    getFilms  : catchedAsync(require('./getFilms')),
    getFilm   : catchedAsync(require('./getFilm')),
    createFilm: catchedAsync(require('./createFilm'))
}