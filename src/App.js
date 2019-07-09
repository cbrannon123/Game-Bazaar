import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// delete implementing in index
import Index from './components/Index';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';

import { Route, Switch, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <div>
      Hello World!
      <Switch>
        {/* add routes */}

      </Switch>
    </div>
    )
  }
}

export default App;
