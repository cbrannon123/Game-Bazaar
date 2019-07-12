import React, { Component } from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// delete implementing in index
import Index from '../../components/Index';
import Create from '../../components/Create';
import Edit from '../../components/Edit';
import SignUpPage from '../../components/SignUpForm/SignUpForm';
import LoginPage from '../../components/LogIn/LogIn';

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
            <div className="container">
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">Game Bazaar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {this.state.user ? (
                                <div>
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/'} className='NavBar-link' onClick={this.handleLogOut}>LOG OUT</Link>

                                    </li>
                                    <li >
                                    </li>
                                </div>
                            ) : (
                                    <div>
                                        <li className="nav-item">
                                            <Link to={'/login'} className="nav-link">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/signup'} className="nav-link">signup</Link>
                                        </li>
                                    </div>
                                )}
                        </ul>
                    </div>
                </nav>
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
                            <LoginPage
                                {...props}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                    <p>app apges</p>
                    

                </Switch>
            </div>
        )
    }
}


export default App;
