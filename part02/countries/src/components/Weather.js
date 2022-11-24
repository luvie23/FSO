import axios from 'axios'
import { useState, useEffect } from 'react';


const Weather = (props) => {
    const [lat, long] = props.latlng
    const [location, setNewLocation] = useState({})

    useEffect(() => {
        axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
        .then(response => {
          setNewLocation(response.data.current_weather)
          
        })
      }, [])
    console.log(location)


    
    return(
        <div>
            <p>Weather Code: {location.weathercode}</p>
            <p>Temperature: {location.temperature} °C</p>
            <p>Wind: {location.windspeed} km/h</p> 
            
        </div>
    )
}

export default Weather 



