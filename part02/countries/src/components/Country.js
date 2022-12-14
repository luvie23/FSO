import Weather from './Weather'

//displays the country details provided by the api call on the app component and then calls the Weather component by passing the latitude and longitude
const Country = (props) => {
    return (
        <div>
            <h1>{props.country.name.official}</h1>
            <p>Capital: {props.country.capital}</p>
            <p>Area: {props.country.area}</p>
            <h2>Languages</h2>
            <p>
            {Object.keys(props.country.languages).map((val, k) => {
                return <li key={k}>{props.country.languages[val]}</li>
            })}
            </p>
            <h1>{props.country.flag}</h1>
            <Weather 
            latlng={props.country.latlng}
            />
            <p>
                {}
            </p>
        </div>
  )}

export default Country