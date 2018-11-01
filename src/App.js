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
        <div class="row">
         <div className="column">
         <h2>Black Mirror</h2>
         <img src={blackmirror} alt="" />
         </div> 
         <div class="column">
         <h2>Breaking Bad</h2>
         <img src={breakingbad} alt="" />
         </div>
         <div class="column">
         <h2>Death Note</h2>
         <img src={deathnote} alt="death note" />
         </div>
        </div>

        <div class="row">
         <div class="column">
         <h2>Got</h2>
         <img src={got} alt="Got" />>
         </div> 
         <div class="column">
         <h2>Fear The Walking Dead</h2>
         <img src={fowd} alt="Fear of The Walking Dead" />
         </div>
         <div class="column">
         <h2>The Wire</h2>
         <img src={wire} alt="The Wire" />
         </div>
        </div> 

      </div>
      
    );
  }
}

export default App;
