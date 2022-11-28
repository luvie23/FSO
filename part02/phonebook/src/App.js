import { useState, useEffect } from 'react'
import Input from './components/Input'
import Filter from './components/Filter'
import Notification from './components/Notification'

import services from './services/phonebook'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [message, setNewMessage] = useState('')

  useEffect(() => {
    services.getAll()
    .then(response => {
      setPersons(response)
    })
  },[])

  

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
      services.create(newPerson)
      .then(response => {
        setPersons(persons.concat(response))
        setNewMessage(`${newName} added to the phonebook`)
        setTimeout(() => {
          setNewMessage(``)
        }, 5000)
        setNewName('')
        setNewNumber('')
        
        
      })
    } else{ 
      if (window.confirm(`Replace ${newName}'s number?`)){
        updateNumber()
      }
    }

  }

  const updateNumber = () => {
    const person = persons.find(n => n.name === newName)
    const changedPerson = {...person, number: newNumber}

    services.update(person.id, changedPerson)
    .then(response => {
      setPersons(persons.map(n => n.id !== person.id ? n : response))
    })
  }

  const remove = (id, name) => {
    if (window.confirm(`Delete ${name}?`)){
      services.remove(id)
    }
    
  }

  return (
    <div>

      <h1>Phonebook</h1>
      <Notification message={message}/>
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
      remove={remove}
      />
    </div>
  )
}

export default App
