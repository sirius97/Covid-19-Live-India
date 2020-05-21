import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import State from './Components/StatePage/StatePage';
import Map from './Components/Map/Map';

class App extends Component {

  

  render(){
    return (
      <div className="App">
        <h1>COVID-19 Live update India!</h1>
        <Route path = '/' exact component ={Home} />
        <Route path = '/state' component = {State} />
        <Route path = '/map' component = {Map} />
        </div>
    )
  }
}

export default App;
