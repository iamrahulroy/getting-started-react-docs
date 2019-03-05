import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Hello from './Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
