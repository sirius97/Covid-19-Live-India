import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import classes from './StatePage.module.css';
import Map from '../Map/Map';

class States extends Component {

    state = {
        regions: []
    }

    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/stats/latest')
                .then(response => {
                    const data = [...response.data.data.regional]
                    const places = []
                    for(let key in data){
                        places.push({...data[key]})
                    }
                    this.setState({
                        regions: places
                    })

    })
}
    render(){
        
        let stateData = <div className={classes.loader}></div>
        if(this.state.regions[0]){
            stateData = (this.state.regions.map((el,i) => {
            return <ul key = {i}>
                        <li>{this.state.regions[i].loc} : {this.state.regions[i].confirmedCasesIndian}</li>
                        <li>Discharged : {this.state.regions[i].discharged}</li>
                        <li>Deaths : {this.state.regions[i].deaths}</li>
                    </ul>
            })) 
        }
        
        return(
            <div className = {classes.StatePage}>
                <h3>Deatils on each state</h3>
                {stateData}
            </div>
        )
    }
}

export default States