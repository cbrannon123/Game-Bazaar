const Game = require('../models/Game');

module.exports = {
  getAllGames,
  getOnePost,
  createGame,
  deleteGame,
  updatePost,
  addComment,
  

};

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(post) {
    res.status(200).json(post);
  });
}

function deleteGame(req, res) {
  Game.findByIdAndRemove(req.params.id).then(function(game) {
    res.status(200).json(game);
  });
}

function getOnePost(req, res) {
  Post.findById(req.params.id).then(function(game) {
    res.status(200).json(game);
  });
}

 function createGame(req, res) {
   console.log('>>>>>>>>>>', req.body)
  Game.create(req.body).then(function(game) {
    res.status(201).json(game);
  });
}

 function getAllGames(req, res) {
   Game.find({}).then(function(game) {
    console.log(game);
    res.status(200).json(game);
  });
}



function addComment(req, res) {
  Post.findById(req.params.id).then(function(post) {
    post.comments.push(req.body);
    post.save(function(post) {
      res.status(200).json(post);
    })
  })
}


// function createNewsPost(req, res) {
//   console.log(req);
//   User.findById(req.user._id).exec(function(err, user) {
//     newsPost.create(req.body, function(err, newsPost) {
//       newsPost.postedByUser = user._id;
//       newsPost.save();
//       res.status(201).json(newsPost);
//     });
//   });
// }