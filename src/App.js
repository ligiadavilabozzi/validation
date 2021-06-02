import React, { Component } from 'react';
import './App.css';
import {Countries} from './components/masks/Countries'
import {Documents} from './components/Documents'
class App extends Component {
  
  render() {
    return(
    <>
  <Countries /> 
  <Documents />
  </>
    )
  }
}

export default App 