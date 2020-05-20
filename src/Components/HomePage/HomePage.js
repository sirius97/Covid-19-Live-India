import React, {Component} from 'react';
import axios from 'axios';

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
                    //console.log(this.state.summary.total)
                }).catch(er => {
                    console.log(er.message)
                })
    }

    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default Home;