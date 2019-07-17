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
        createGame(this.state).then(function () {
            window.location = '/index'
        })



    }






    onChange = (e) => this.setState({ [e.target.name]: e.target.value })


    render() {
        return (
            <div style={{textAlign:'center'}} className='card'>
                <h3>Enter Game Info</h3>
                <hr />
                <form  onSubmit={this.handleSubmit}>
                    <div className="dropdown">
                        <select onChange={this.onChange} name='platform' value={this.state.platform} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <option className="dropdown-menu" >Select Platform</option>
                            <option className="dropdown-item" >Select Platform</option>
                            <option className="dropdown-item" >PS4</option>
                            <option className="dropdown-item" >XBOX</option>
                            <option className="dropdown-item" >NSW</option>
                        </select>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Game Title</span>
                        </div>
                        <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={this.onChange} name='title' value={this.state.title} />
                    </div>
                    <br />
                    <br />
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Your Location</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={this.onChange} name='location' value={this.state.location} />
                    </div>
                    <br />
                    <input className='btn btn-success' type="submit" value="Submit Info" />
                </form>

            </div>
        )
    }

}

export default LocationInputPage;







