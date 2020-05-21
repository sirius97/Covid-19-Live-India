import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import classes from '../StatePage/StatePage.module.css';


const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 500,
  center: [78.9629, 22.5937]
};

const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
  ];
  
  const DEFAULT_COLOR = '#EEE';

  const geographyStyle = {
    default: {
      outline: 'none'
    },
    hover: {
      fill: '#ccc',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };

  let places = []

 


function Map(props) {


    const [tooltipContent, setTooltipContent] = useState('');
    const [StateData, setStateData] = useState('');
    const [data, setData] = useState(getHeatMapData());
    console.log('main',data)
    

    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/stats/latest')
        .then(response => {

            const data = [...response.data.data.regional]
            for(let key in data){
                places.push({...data[key]})
            }              
            setStateData(places)
        })
    }, []);

  
     
  
    const onMouseEnter = (geo, current = { value: 'NA' }) => {
      return () => {
        setTooltipContent(`${geo.properties.name}: ${current.value}`);
      };
    };
  
    const onMouseLeave = () => {
      setTooltipContent('');
    };

    const onChangeButtonClick = () => {
        setData(getHeatMapData());
      };

      let mapPic = <div className = {classes.loader}></div>
      if(places[0]){
          mapPic = (    
            <div>
                  <div className="center">
            <button style = {{backgroundColor: 'green', padding: '10px', marginLeft: '5px'}} onClick={onChangeButtonClick}>Click to activate map</button>
          </div>
          <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap 
              data-tip=""
              projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={300}>
                  <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
  
          </ComposableMap>
          </div>)
      }
    return (
        <div>
            {mapPic}
        </div>
    )   

    }

    const getHeatMapData = () => {
  
      let data = [
        { id: 'AN', state: 'Andaman and Nicobar Islands', value: 0 },
        { id: 'AP', state: 'Andhra Pradesh', value: 0  },
        { id: 'AR', state: 'Arunachal Pradesh', value: 0  },
        { id: 'AS', state: 'Assam', value: 0  },
        { id: 'BR', state: 'Bihar', value: 0  },
        { id: 'CH', state: 'Chandigarh', value: 0  },
        { id: 'CT', state: 'Chhattisgarh', value: 0  },
        { id: 'DN', state: 'Dadra and Nagar Haveli', value: 0  },
        { id: 'DL', state: 'Delhi', value: 0  },
        { id: 'GA', state: 'Goa', value: 0  },
        { id: 'GJ', state: 'Gujarat', value: 0  },
        { id: 'HR', state: 'Haryana', value: 0  },
        { id: 'HP', state: 'Himachal Pradesh', value: 0  },
        { id: 'JK', state: 'Jammu and Kashmir', value: 0  },
        { id: 'JH', state: 'Jharkhand', value: 0  },
        { id: 'KA', state: 'Karnataka', value: 0  },
        { id: 'KL', state: 'Kerala', value: 0  },
        { id: 'LA', state: 'Ladakh', value: 0  },
        { id: 'MP', state: 'Madhya Pradesh', value: 0  },
        { id: 'MH', state: 'Maharashtra', value: 0  },
        { id: 'MN', state: 'Manipur', value: 0  },
        { id: 'ML', state: 'Meghalaya', value: 0  },
        { id: 'MZ', state: 'Mizoram', value: 0  },
        { id: 'OR', state: 'Odisha', value: 0  },
        { id: 'PY', state: 'Puducherry', value: 0  },
        { id: 'PB', state: 'Punjab', value: 0  },
        { id: 'RJ', state: 'Rajasthan', value: 0  },
        { id: 'TN', state: 'Tamil Nadu',value: 0  },
        { id: 'TG', state: 'Telangana', value: 0  },
        { id: 'TR', state: 'Tripura', value: 0  },
        { id: 'UT', state: 'Uttarakhand', value: 0  },
        { id: 'UP', state: 'Uttar Pradesh', value: 0  },
        { id: 'WB', state: 'West Bengal', value: 0  },
      ];
  
 let newData = places.map((el,index) => {
   
       if(el.loc == data[index].state){
           data[index].value = el.totalConfirmed
       }else{
           data[index].value = 0
       }
   })
  console.log('heatMap',data)
      return data;
};
    


export default Map;