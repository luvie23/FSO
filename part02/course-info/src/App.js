
const Total = (props) => {
  return(
    <h3>Total of {props.number.reduce((a, b) => {
      return a + b; }, 0)} exercises</h3>
  )
}

const Part = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Course = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>Web Development Curriculum</h1>
      <h2>{props.course.name}</h2>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(item =>
        <Course  key={item.id} course={item}/>)}
    </div>
    )
}

export default App


// <Course key={course.id} course={courses}/>