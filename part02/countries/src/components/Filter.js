import { getValue } from '@testing-library/user-event/dist/utils'
import Name from './Name'

const Filter = (props) => {
    const checkString = (country) => {
        return country.name.common.toUpperCase().includes(props.search.toUpperCase())
      }

    const search = () => {
      return props.countries.filter(checkString)
       
    }
    if (search().length === 1){
      return(
        <div>{search().map(country =>
          <div>
            <h1>{country.name.official}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h2>Languages</h2>
            <p>
              {Object.keys(country.languages).map((val, k) => {
                return <li key={k}>{country.languages[val]}</li>
              })}
            </p>
            <h1>{country.flag}</h1>
            </div>
            )}

        </div>
      )
    } else if (search().length > 10){
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
    return(
      <ul >
        {search().map(country =>
          <Name key={country.name.common} country={country}/>
        )}
      </ul>
    )
  }

export default Filter