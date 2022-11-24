import Name from './Name'

const Filter = (props) => {
    const checkString = (country) => {
        return country.name.common.toUpperCase().includes(props.search.toUpperCase())
      }

    const search = () => {
      return props.countries.filter(checkString)
       
    }

    if (search().length > 10){
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
    return(
      <ul>
        {search().map(country =>
          <Name key={country.name.common} country={country}/>
        )}
      </ul>
    )
  }

export default Filter