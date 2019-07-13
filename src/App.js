import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// delete implementing in index
import Index from './components/Index';
import Create from './components/Create';
import Edit from './components/Edit';
import SignUpPage from './components/SignUpForm/SignUpForm';
import LogInPage from './components/LogIn/LogIn';
import LocationInputPage from './pages/LocationInputPage/LocationInputPage';
import NavBar from './components/NavBar/NavBar'



import { Route, Switch, Link, Redirect } from 'react-router-dom';
import userService from './utils/userService';


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
                {this.state.user ? (
                    <>
                <NavBar 
                user={this.state.user}
                handleLogOut={this.handleLogOut}
                />
                    <LocationInputPage user={this.state.user} />
                        </>
                    ) : (
                        
                       <></>
                        
                    )}
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


                </Switch>
            </div>

        )
    }
}


export default App;
