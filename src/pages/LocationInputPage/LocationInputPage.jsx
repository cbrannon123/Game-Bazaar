import React, { Component } from 'react';
import './LocationInputPage.css'
import { createGame } from '../../services/api'





class LocationInputPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            platform: '',
            userId: this.props.user,
            userName: this.props.user.name,
            location: '',
            postedOn: Date()
            
        }
    }



handleSubmit = (e) => {
    e.preventDefault();
    createGame(this.state).then(function() {
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
                <label>Post Title</label>
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

export default LocationInputPage;







