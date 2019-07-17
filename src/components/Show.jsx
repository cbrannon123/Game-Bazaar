

import React, { Component } from 'react';
import { getGame, addComment } from '../services/api';

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            platform: '',
            comment: [],
            commentBody: '',
            body: '',
            userId: this.props.user._id,
            userName: this.props.user.name,
            location: '',
            postedOn: Date()

        }
    }

    componentDidMount() {
        var gameid = this.props.match.params.gameid;
        var self = this;
        getGame(gameid).then(function (json) {
            self.setState({ id: gameid, title: json.title, platform: json.platform, location: json.location })
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        var self = this;
        var gameid = this.props.match.params.gameid;
        
        addComment(gameid, self.state.commentBody).then(function(json) {
            console.log('hello from handle submit')
            getGame(self.state.gameid).then(function(game) {
            self.setState({ title: game.title, 
                            body: game.body, comment: game.comment, commentBody: '' })
          })
        });
      }

    handleCommentBody = (e) => {
        console.log(e.target)
        this.setState({ commentBody: e.target.value })
      }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        var comment = this.state.comment.map((comment, idx) => {
            return (
                <li key={idx}>
                    {comment.body}
                </li>
            )
        });
        return (
            <div style={{textAlign:'center'}}>
                <h3 >Game Info</h3>
                <hr />
                <h1 className='card'>
                    <span>{this.state.title}</span>
                    <br />
                    <span>{this.state.platform}</span>
                    <span>{this.state.location}</span>
                </h1>
                <span>{this.state.userName}</span>
                <div>
                    <br />
                    <br />
                    {this.state.comment.length < 1 ?
                        <h2>No Comments!</h2>
                        :
                        <ul>
                            {comment.body}
                        </ul>
                    }
                    <form onSubmit={this.handleSubmit}>
                        <label>Add Comment</label>
                        <br />
                        <textarea onChange={this.handleCommentBody} value={this.state.commentBody}></textarea>
                        <br />
                        <input type="submit" value="Add comment" className='btn btn-dark' />
                    </form>
                </div>
            </div>
        )
    }

}



export default Show;