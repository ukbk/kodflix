import React, { Component } from 'react';
import movieCover from './images/pif.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={movieCover} className="movieCover" alt="paid in full" />
      </div>
    );
  }
}

export default App;
