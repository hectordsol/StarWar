const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getCharacters);
router.get('/:id', controllers.getCharacter);
router.put('/:id', middlewares.characterValidation, controllers.changeCharacter);
router.delete('/:id', controllers.deleteCharacter);
router.post('/',middlewares.characterValidation, controllers.createCharacter)
module.exports = router;    