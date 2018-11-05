import React, { Component } from 'react';
import blackmirror from './images/1.jpg';
import breakingbad from './images/2.jpg';
import deathnote from './images/3.jpg';
import got from './images/4.jpg';
import fowd from './images/5.jpg';
import wire from './images/6.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">

<div className="item">
  <img className="column" src={blackmirror} alt="" />
  <div className="overlay">
    <div className="text">Black Mirror</div>
  </div>
</div>

<div className="item">
  <img className="column" src={breakingbad} alt="" />
  <div className="overlay">
    <div className="text">Breaking Bad</div>
  </div>
</div>

<div className="item">
  <img className="column" src={deathnote} alt="" />
  <div className="overlay">
    <div className="text">Death Note</div>
  </div>
</div>
</div>

<div className="row">
<div className="item">
  <img className="column" src={got} alt="" />
  <div className="overlay">
    <div className="text">Got</div>
  </div>
</div>

<div className="item">
  <img className="column" src={fowd} alt="" />
  <div className="overlay">
    <div className="text">Fear of The Walking Dead</div>
  </div>
</div>

<div className="item">
  <img className="column" src={wire} alt="" />
  <div className="overlay">
    <div className="text">The Wire</div>
  </div>
</div>
</div>

</div>
);
}
}

export default App;
