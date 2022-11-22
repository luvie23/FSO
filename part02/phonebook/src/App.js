import { useState } from 'react'



const Name = (props ) => {
  return(
    <li>{props.person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {

    setNewName(e.target.value)
  }

  //goes through the phonebook and compares the new entry
  const checkDuplicate = (person) => {
    return person.name === newName
  }

  const addName = (e) => {
    e.preventDefault()
    if (!persons.filter(checkDuplicate).length > 0) {

      const newPerson = {
        name: newName
  
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
      <div>debug: {newName}</div>

      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
            <Name key={person.name} person={person}/>
          )}
      </ul>
    </div>
  )
}

export default App
