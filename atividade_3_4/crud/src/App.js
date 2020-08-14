import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/Create';
import List from './components/List';
import Home from './components/Home';
import Edit from './components/Edit';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <Link to={'/'} className="navbar-brand">CRUD</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/List'} className="nav-link">List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Edit'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>Projeto CRUD</h2>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={Create} />
            <Route path='/list' component={List} />
            <Route path='/edit' component={Edit} />
          </Switch>
          <br />
        </div>
      </Router>
    );
  }
}
