import axios from 'axios'
import { useState, useEffect } from 'react';
import Input from './components/Input'
import Filter from './components/Filter'



function App() {
  const [search, setNewSearch] = useState('')
  const [countries, setNewCountries] = useState([])

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
  }



  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setNewCountries(response.data)
      
    })
  }, [])
  console.log(countries)



  return (
    <div>
      <Input 
      text='find countries'
      value={search}
      function={handleSearchChange}
      />
      <Filter
      countries={countries}
      search={search}
      />
    </div>

  );
}

export default App;
