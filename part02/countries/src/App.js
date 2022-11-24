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


  //api call to get country data
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setNewCountries(response.data)
      
    })
  }, [])




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
      setNewSearch={setNewSearch}
      />
    </div>

  );
}

export default App;
