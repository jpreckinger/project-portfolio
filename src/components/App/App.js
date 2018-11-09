import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Projects from '../Projects/Projects';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Projects}/>
        <Route exact path="/admin" component={Admin}/>
        </div>
      </Router>
    );
  }
}

export default App;
