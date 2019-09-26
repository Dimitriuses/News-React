import React, { Component } from "react";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header"

class App extends Component{
  render() {
    return (
      <Router>
        <Header/>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
      </Router>
    );
  }
}
export default App;
