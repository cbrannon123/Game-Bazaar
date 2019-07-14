import React, { Component } from 'react';
import LocationInputF from '../../components/LocationInputForm/LocationInputForm';
import './LocationInputPage.css'




class LocationInputPage extends Component {
    constructor(props) {
        super()
        this.state = {
            city: '',
            zip: '',
            
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addLocal(this.state);
        this.setState({
            city: '',
            zip: '',
            

        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })


    render() {
        return (
            <div>
                <h3>Enter Your Location</h3>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            type='text'
                            required={true}
                            name='city'
                            className='form-control'
                            value={this.state.city}
                            onChange={this.onChange}
                            placeholder="enter your city"></input>
                    </div>


                    <input
                        type='number'
                        required={true}
                        name='zip'
                        className='form-control'
                        value={this.state.zip}
                        onChange={this.onChange}
                        placeholder="enter your zip-code">

                    </input>
                    
                    <br />
                    <input type='submit' value='submit' className='btn btn-primary' />
                </form >
            </div>
        )
    }
}

export default LocationInputPage







