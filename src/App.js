import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Switches from './components/switches';
import Dashboard from './components/dashboard';
import Switchy from './components/switchy';
import CreateSwitch from './components/createswitch';
import Account from './components/account';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/switches">
          <Switches />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/switch">
          <Switchy />
        </Route>
        <Route path="/createswitch">
          <CreateSwitch />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Router>
    </div>
  );
}

export default App;
