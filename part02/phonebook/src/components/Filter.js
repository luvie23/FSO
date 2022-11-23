import Name from './Name'

const Filter = (props) => {
    const checkString = (person) => {
        return person.name.toUpperCase().includes(props.search.toUpperCase())
      }

    const search = () => {
      const newPersons = props.persons.filter(checkString)
      return newPersons
    }
    return(
      <ul>
        {search().map(person =>
          <Name key={person.name} person={person}/>
        )}
      </ul>
    )
  }

export default Filter