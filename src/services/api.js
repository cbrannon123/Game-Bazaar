import tokenService from "../utils/tokenService";

// index
export function getAllGames() {
    return fetch('/api/index').then(function(res) {
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
    return fetch('/api/game', {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'content-type': 'application/json', 
        'Authorization': "Bearer " + tokenService.getToken()
      }
    })
    
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
  
  
  // add a comment to post
//   export function addComment(postId, comment) {
//     return fetch(`/api/game/${id}/comments`, {
//       method: 'POST',
//       body: JSON.stringify({
//         body: comment
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//   }