import { useState } from 'react'



const Name = (props ) => {
  return(
    <li>{props.person.name} {props.person.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNameChange = (e) => {
  
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {

    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {

    setNewSearch(e.target.value)
    
  }

  const checkString = (person) => {
    return person.name.toUpperCase().includes(newSearch.toUpperCase())
  }


  const search = () => {
    const newPersons = persons.filter(checkString)
    return newPersons
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

      <div>
        search: <input  
        value={newSearch}
        onChange={handleSearchChange}/>
      </div>
      
      <h2>add a new person</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {search().map(person =>
            <Name key={person.name} person={person}/>
          )}
      </ul>
    </div>
  )
}

export default App
