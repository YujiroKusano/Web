import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './pages/Test';
import Index from './pages/Index';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Index}/>
            <Route path='/Test' component={Test}/>
          </div>
        </Router>
      </div>
    );
  }
}