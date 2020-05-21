import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import State from './Components/StatePage/StatePage';
import Map from './Components/Map/Map';

class App extends Component {

  

  render(){
    return (
      <div className={"App"}>
        <div className={"Part"}>
        <h1>COVID-19 Live update India!</h1>
        <NavLink to ='/state'
                style ={{color:'yellow'}}>States</NavLink>
        <NavLink to ='/map'
                style = {{marginLeft: '10px',color: 'yellow'}}
                >Map</NavLink>
      </div>
        <Route path = '/Covid-19-Live-1/' exact component ={Home} />
        <Route path = '/state' component = {State} />
        <Route path = '/map' component = {Map} />
        </div>
    )
  }
}

export default App;
