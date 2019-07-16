import tokenService from "../utils/tokenService";

// index
export function getAllGames() {
    return fetch(`/api/index`).then(function(res) {
      return res.json();
    })
  }
  
  // show
  export function getGame(id) {
    return fetch(`/api/game/${id}`).then(function(res) {
      return res.json();
    })
  }
  
  // create
  export function createGame(game) {
    //console.log(game)
    return fetch('/api/game', {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'content-type': 'application/json', 
        'Authorization': "Bearer " + tokenService.getToken()
      }
    })
    // .then(function(res) {
    //   return res.json()
    //})
  }
  
  // edit
  export function editGame(game) {
    return fetch(`/api/game/${game.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: game.title,
        platform: game.platform,
        location: game.location,
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  
  // delete
  export function deleteGame(id) {
    return fetch(`/api/game/${id}`, {
      method: 'delete'
    }).then(function(res) {
      return res.json()
    });
  }
  
  // // upvote/downvote posts
  // export function upvotePost(id, type) {
  //   var type = type === "downvote" ? "downvote" : "upvote";
  //   return fetch(`/api/posts/${id}/${type}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       upvotes: 1
  //     }),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // }
  
  // // add a comment to post
  // export function addComment(postId, comment) {
  //   return fetch(`/api/posts/${postId}/comments`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       body: comment
  //     }),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // }