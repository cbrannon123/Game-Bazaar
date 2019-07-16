const Game = require('../models/Game');
const Comment = require('../models/Comment')

module.exports = {
  getAllGames,
  getOneGame,
  createGame,
  deleteGame,
  updateGame,
  addComment,
  

};

function updateGame(req, res) {
  Game.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(game) {
    res.status(200).json(game);
  });
}

function deleteGame(req, res) {
  Game.findByIdAndRemove(req.params.id).then(function(game) {
    res.status(200).json(game);
  });
}

function getOneGame(req, res) {
  Game.findById(req.params.id).then(function(game) {
    res.status(200).json(game);
  });
}

 function createGame(req, res) {
  Game.create(req.body).then(function(game) {
    res.status(201).json(game);
  });
}

 function getAllGames(req, res) {
   Game.find({}).then(function(game) {
    res.status(200).json(game);
  });
}



function addComment(req, res) {
  Game.findById(req.params.id).populate('comment').then(function(game) {
    console.log('Hello from add comment')
    game.comment.push(req.body);
    game.save(function(game) {
      res.status(200).json(game);
    })
  })
}


// function addComment(req, res) {
//   Game.findById(req.params.id).then(function(game) {
//     game.comments.push(req.body);
//     game.save(function(post) {
//       res.status(200).json(post);
//     })
//   })
// }