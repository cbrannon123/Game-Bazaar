import React, { Component } from 'react'
import { getAllGames, deleteGame } from '../../services/api'
import { Link } from 'react-router-dom'

import userService from '../../utils/userService';





class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            currentId: userService.getUser()._id

        }

    }



    async componentDidMount() {
        //const id = this.props.match.params.id;
        var games = await getAllGames()
        this.setState({
            games: games
        })
        console.log(games)
    }

    handleDelete = (id) => {

        deleteGame(id).then(function (json) {
            window.location = '/index'

        });

    }




    render() {

        return (
            <div>
                {this.state.games.map((game, i) => {
                    return (
                        <ul className='card' key={i}>
                            <label>Game Title</label>
                            <h4 className="card-title">{game.title}</h4>
                            <label>Platform</label>
                            <h5 className="card-title">{game.platform}</h5>
                            <label>Location</label>
                            <p className="card-text">{game.location}</p>
                            <p className="card-text">{game.userName}</p>
                            <p className="card-footer text-muted">{game.postedOn}
                                <br />
                                <br/>
                                <Link to={`/game/${game._id}`} className="btn btn-secondary">View</Link></p>
                            {game.userId === this.state.currentId ? (
                                <ul>
                                    <button  className='btn btn-danger' onClick={() => this.handleDelete(`${game._id}`)}>Delete Game</button>
                                
                                    <Link to={`/games/${game._id}/edit`} className="btn btn-primary">Edit Post</Link>
                                </ul>
                            ) : (
                                    <></>
                                )}

                        </ul>
                    )
                })}
            </div>
        )

    }

}



export default Index;



