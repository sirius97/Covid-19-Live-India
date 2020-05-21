

const getHeatMapData = () => {
    const places = []
    axios.get('https://api.rootnet.in/covid19-in/stats/latest')
                .then(response => {
                    const data = [...response.data.data.regional]
                    for(let key in data){
                        places.push({...data[key]})
                    }                   
                    console.log(places[0])
    })


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

    const newData = data.map((el,index) => {
        if(el.state == places[index].loc){
            el.value = places[index].totalConfirmed
        }else{
            el.value = 0
        }
    })
    return newData;
  };

export default getHeatMapData;