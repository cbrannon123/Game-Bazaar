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
            <div style={{textAlign:'center'}}>
                {this.state.games.map((game, i) => {
                    return (
                        <ul  style={{borderBottom:'solid 2px black'}} className='card' key={i}>
                            <label>Game Title</label>
                            <h4 className="card-title">{game.title}</h4>
                            <hr/>
                            <label>Platform</label>
                            <h4 className="card-title">{game.platform}</h4>
                            <hr/>
                            <label>Location</label>
                            <h4 className="card-text">{game.location}</h4>
                            <hr/>
                            <label>Posted By</label>
                            <p className="card-text">{game.userName}</p>
                            <p className="card-footer text-muted">{game.postedOn}
                                <br />
                                <br/>
                                <Link to={`/show/${game._id}`} className="btn btn-secondary">View</Link></p>
                            {game.userId === this.state.currentId ? (
                                <ul style={{alignContent: 'center', padding: '0 10px 0 0'}} >
                                    <button  style={{margin:'10px', borderRadius:'5%'}} className="btn btn-secondary" onClick={() => this.handleDelete(`${game._id}`)}>Delete Game</button>
                                
                                    <Link style={{margin:'10px', borderRadius:'5%'}} to={`/games/${game._id}/edit`} className="btn btn-secondary">Edit Post</Link>
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



