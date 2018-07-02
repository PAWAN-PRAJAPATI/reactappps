import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DropdownButton} from 'react-bootstrap'
//import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from 'dropdown-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      <div style={{flexDirection:'row'}}> 
      <div style={{flex:1}}>
        <DropdownButton  title={<div style={{width:1000}}>Heasdfasdfasdllo</div>} >
        <div style={{width:1000}}>
          <div>Custom Component</div>  
          <div>Custom Component</div>  
          <div>Custom Component</div>  
          <div>Custom Component</div>  
          <div>Custom Component</div>  
          <div>Custom Component</div>  
          <div>Custom Component</div>  
          <div>Custom Component</div>  
        </div>
        </DropdownButton>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
