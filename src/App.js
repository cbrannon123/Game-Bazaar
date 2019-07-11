import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// delete implementing in index
import Index from './components/Index';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import Login from './components/Login';

import { Route, Switch, Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">Game Bazaar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                <Route exact path='/login' component={ Login } />

                </Switch>
            </div>
        )
    }
}

export default App;
