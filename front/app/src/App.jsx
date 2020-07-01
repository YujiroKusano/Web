import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Top from './pages/top/Top';
import Test from './pages/test/Test';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Top}/>
            <Route path='/test' component={Test}/>
          </div>
        </Router>
      </div>
    );
  }
}