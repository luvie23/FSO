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
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName

    }
    setPersons(persons.concat(newPerson))
    setNewName('')
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
