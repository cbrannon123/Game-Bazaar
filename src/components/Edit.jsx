import React, { Component } from 'react';
import { getGame, editGame } from '../services/api';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            platform: '',
            userId: this.props.user._id,
            userName: this.props.user.name,
            location: '',
            postedOn: Date()
            
        }
    }

    componentDidMount() {
        var gameid = this.props.match.params.gameid;
        // console.log(this.props)
        var self = this;
        getGame(gameid).then(function(json) {
            // console.log(json)
            self.setState({ id: gameid, title: json.title, platform: json.platform, location: json.location })
        })
        console.log('hello comp Mount Edit.jsx', this.props)
    }


    handleSubmit = (e) => {
        console.log('2Hello from handleSubmit Edit.jsx')
        e.preventDefault();
        editGame(this.state).then(function(json) {
            window.location = '/index'
        })
        
    }
        
    

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div>
                <h3>Enter Game Info</h3>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label>Game Title</label>
                    <input onChange={this.onChange} name= 'title' value={this.state.title} />
                    <br />
                    <label>Platform</label>
                   <select onChange={this.onChange} name= 'platform' value={this.state.platform}>
                       <option>Select</option>
                       <option>PS4</option>
                       <option>XBOX</option>
                       <option>NSW</option>
                   </select>
                    <br />
                    <label>Location</label>
                    <input onChange={this.onChange} name='location' value={this.state.location} />
                    <br/>
                    
                    <br />
                    
                    
                    <input type="submit" value="Submit Info" />
                </form>
    
            </div>
        )
    }

}

export default Edit;