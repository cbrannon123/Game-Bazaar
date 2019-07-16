import React, {Component } from 'react'
import { getAllGames, deleteGame } from '../../services/api'
import {Link, Redirect } from 'react-router-dom'
import LocalItem from '../localitem/LocalItem';
import userService from '../../utils/userService';





class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            games: [],
            currentId: userService.getUser()._id
            
        }

    }
    
   

    async componentDidMount() {
    const id = this.props.match.params.id;
     var games = await getAllGames() 
     this.setState({
         games:games
     })
     console.log(games)
    }

    handleDelete = (id) => {
       
        deleteGame(id).then(function(json) {
            window.location='/index'
            
        });
  
    }
    

    

    render() {
        
        return <div>
            {this.state.games.map((game, i) => {
               return( 
                <ul key={i}>
               <Link to={`/game/${game._id}`} >{game.title}-{game.platform}-{game.location}-{game.postedOn}-{game.userName}</Link>
               {game.userId === this.state.currentId  ? ( 
                   <ul>
                   <a href="#"  className='btn' onClick={() => this.handleDelete(`${game._id}`)}>Delete Game</a>
                   <Link to={`/game/${game._id}/edit`} className="btn btn-secondary">Edit Post</Link>
                   </ul>
                   ) : (
                      <></>
               )}
            
               </ul>
               )
            })}
        </div>
          
        
    }
        
}



export default Index;



