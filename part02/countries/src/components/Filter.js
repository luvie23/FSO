import { getValue } from '@testing-library/user-event/dist/utils'
import Name from './Name'
import Country from './Country'

const Filter = (props) => {
    const checkString = (country) => {
        return country.name.common.toUpperCase().includes(props.search.toUpperCase())
      }
    
    const onClickFunction = (country) =>{
      
      props.setNewSearch(country)
    }

    const search = () => {
      return props.countries.filter(checkString)
       
    }
    if (search().length === 1){
      return(
        <div>{search().map(country =>
          <Country key={country.name.common}
          country={country}/>
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
          <Name key={country.name.common} country={country} onClickFunction={onClickFunction}/>
        )}
      </ul>
    )
  }

export default Filter