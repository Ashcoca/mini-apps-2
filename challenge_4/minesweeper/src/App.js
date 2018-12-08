import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      board: [],
      isLoading: true,
      error: null
    }
  }

  generateBoard(mines) {
    //set mines = 10 if no number passed in
    (mines) ? mines = mines : mines = 10;

  }


  render() {
    if (!this.state.isLoading) {
      return (
        <div className="App">
          Buttz
        </div>
      );
    } else {
      return (
        <div>
          <img src="https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif"></img>
        </div>
      )
    }
  }
}
export default App;
