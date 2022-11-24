import { useState, useEffect } from 'react'
import Input from './components/Input'
import Filter from './components/Filter'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  })


  const handleNameChange = (e) => { 
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
  }

  //goes through the phonebook and compares the new entry
  const checkDuplicate = (person) => {
    return person.name === newName
  }

  const addName = (e) => {
    e.preventDefault() 
    if (!persons.filter(checkDuplicate).length > 0) {

      const newPerson = {
        name: newName,
        number: newNumber
  
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
    } else{ 
      alert(`${newName} is already in the phonebook`)
      console.log(persons)
    }

  }

  return (
    <div>

      <h1>Phonebook</h1>

      <Input
      text='search:'
      value={newSearch}
      function={handleSearchChange}
      />
      <h2>add a new person</h2>
      <form onSubmit={addName}>
        <Input
        text='name:'
        value={newName}
        function={handleNameChange}
        />
        <Input 
        text='number' 
        value={newNumber}
        function={handleNumberChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Filter
      persons={persons}
      search={newSearch}
      />
    </div>
  )
}

export default App
