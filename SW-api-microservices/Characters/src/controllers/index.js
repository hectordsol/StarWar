const {catchedAsync}= require('../utils');

module.exports={
    getCharacters  : catchedAsync(require('./getCharacters')),
    getCharacter   : catchedAsync(require('./getCharacter')),
    createCharacter: catchedAsync(require('./createCharacter')),
}