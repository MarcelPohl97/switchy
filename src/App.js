import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/*Components*/
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import ForgotPassword from './components/forgotpassword';
import Switches from './components/switches';
import Dashboard from './components/dashboard';
import Switchy from './components/switchy';
import CreateSwitch from './components/createswitch';
import Account from './components/account';

/*Images*/
import Workout from './images/workout.svg';
import Food from './images/food.svg';
import Beach from './images/beach.svg':

function App() {
  const switchycardpreview = [
    {
      uid: 1,
      name: 'Marcellus Fullbody Workout',
      id:'dasasdtraeasd',
      publisher: "Marcellus Pale",
      date: "16.10.2020",
      publish: true,
      image: Workout,
    },
    {
      uid: 2,
      name: 'Pale Full day of Eating',
      id:'dasasdtraeasdadasd',
      publisher: "Pale Sonas",
      date: "16.10.2020",
      publish: true,
      image: Food,
    },
    {
      uid: 3,
      name: 'Marcellus Fullbody Workout',
      id:'dasasdtraeasd',
      publisher: "Marcellus Pale",
      date: "16.10.2020",
      publish: true,
      image: Beach,
    }

  ];    
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
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/switches">
          <Switches  />
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
