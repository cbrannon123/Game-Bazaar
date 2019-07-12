import React, { Component } from 'react';
import LocationInputForm from '../../components/LocationInputForm/LocationInputForm';
import './LocationInputPage.css'




class LocationInputPage extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div>
            <h3>Enter Your Location</h3>
            <hr />
            <div>
            <input className='form-control' placeholder="enter your city"></input>
            </div>
            <input className='form-control' placeholder="enter your zip-code"></input>
            <br/>
            <a href="#" className='btn btn-primary'>Submit </a>
            </div>
        )
    }
}








export default LocationInputPage