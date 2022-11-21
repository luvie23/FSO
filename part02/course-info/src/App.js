
const Total = (props) => {
  console.log(props)
  return(
    <p>Total of {props.number.reduce((acc, value) => {
      return acc + value; }, 0)} exercises</p>
  )
}

const Part = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Course = (props) =>{

  return(
    <div>
      <h1>{props.course.name}</h1>
      <div>
        {props.course.parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
          )}
      </div>
      <Total number={props.course.parts.map(part =>{
          return part.exercises
        })}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App