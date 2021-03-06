import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import {User} from './components/User';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';


function App() {
  return (
    <Router>
      <div className="conatiner-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">TRyinG FuN</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/guest">Guest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users/:user_id">Profile</a>
            </li>
          </ul>


          </div>
        </nav>

        <Switch>
          <Route path="/guest" component={Post} />
          <Route exact={true} path="/users" component={User} />
          <Route path="/users/:user_id" component={Profile} />
          <Route path="/" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;
