import React, {Component} from 'react';
import axios from 'axios';
import classes from './HomePage.module.css';
import {NavLink} from 'react-router-dom';

class Home extends Component{

    state = {
        summary : []
    }

    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/stats/latest')
                .then(response => {
                    this.setState({
                        summary : {...response.data.data.summary}
                    })
                    console.log(this.state.summary)
                }).catch(er => {
                    console.log(er.message)
                })
    }

    render(){
        return(
            <div className = {classes.Home}>
                <h2>Total Casses</h2>
                <h4>{this.state.summary.total}</h4>
                <h2>Total Confirmed Casses</h2>
                <h4>{this.state.summary.confirmedCasesIndian}</h4>
                <h2>Total Confirmed Foreign Casses</h2>
                <h4>{this.state.summary.confirmedCasesForeign}</h4>
                <h2>Total Recovered</h2>
                <h4>{this.state.summary.discharged}</h4>
                <h2>Total Deaths</h2>
                <h4>{this.state.summary.deaths}</h4>
                <NavLink to ='/state'
                style ={{color:'yellow'}}>See For All States</NavLink>
                <NavLink to ='/map'
                style = {{marginLeft: '10px',color: 'yellow'}}
                >See Map</NavLink>
            </div>
        )
    }
}

export default Home;