import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// delete implementing in index
import Index from '../index/Index';
//import Create from './components/Create';
//import Edit from './components/Edit';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../../components/LogIn/LogIn';
import LocationInputPage from '../LocationInputPage/LocationInputPage';
import NavBar from '../../components/NavBar/NavBar'




import { Route, Switch, Link, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
        }
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    };

    handleLogOut = () => {
        console.log("handlelogout called");
        userService.logout();
        console.log("logged out");
        this.setState({ user: null });
        console.log(this.state.user);
    };

    


    render() {
        return (
            <div>
                <div>

                    <NavBar
                        user={this.state.user}
                        handleLogOut={this.handleLogOut}
                    />



                </div>
                <Switch>
                    <Route
                        exact
                        path="/signup"
                        render={props => (
                            <SignUpPage
                                {...props}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/login"
                        render={props => (
                            <LogInPage
                                {...props}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                    <Route exact path='/index' render={props => (
                        <Index {...props}/>
                    )} />
                    <Route exact path='/game' render={props => (
                        <LocationInputPage 
                        {...props}
                        user={this.state.user}
                        />
                    )} />

                </Switch>
            </div>

        )
    }
}


export default App;
