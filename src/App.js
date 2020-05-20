import React, {Component} from 'react';
import './App.css';
import Home from './Components/HomePage/HomePage';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h2>COVID-19 Live update India!</h2>
        <Home />
        <p>State</p>
      </div>
    );
  }
  
}

export default App;
