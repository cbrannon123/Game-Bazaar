var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/posts');
var usersController = require('../controllers/users');

router.post('/signup', usersController.signup)
router.post('/login', usersController.login)
router.get('/index', gamesController.getAllGames);
router.post('/game', gamesController.createGame);
// router.get('/posts/:id', postsController.getOnePost);
// router.post('/posts', postsController.createPost);
// router.put('/posts/:id/upvote', postsController.upvotePost);
// router.put('/posts/:id/downvote', postsController.downvotePost);
router.delete('/game/:id', gamesController.deleteGame);
// router.put('/posts/:id', postsController.updatePost);
// router.post('/posts/:id/comments', postsController.addComment);

module.exports = router;