var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games');
var usersController = require('../controllers/users');

router.post('/signup', usersController.signup)
router.post('/login', usersController.login)
router.get('/index', gamesController.getAllGames);
router.post('/game', gamesController.createGame);
router.get('/game/:id', gamesController.getOneGame);
router.delete('/game/:id', gamesController.deleteGame);
router.put('/game/:id', gamesController.updateGame);
// router.post('/game/:id/comments', gamesController.addComment);

module.exports = router;