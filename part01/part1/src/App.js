const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (parts) => {
  return(
    <p>{parts.part} {parts.exercise}</p>
  )
}

const Content = (parts) => {
  return(
    <div>
      <Part part={parts.parts[0].part} exercise={parts.parts[0].exercises}/>
      <Part part={parts.parts[1].part} exercise={parts.parts[1].exercises}/>
      <Part part={parts.parts[2].part} exercise={parts.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      Number of exercises {props.total}
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      part:'Fundamentals of React',
      exercises: 10
    },
    {
      part:'Using props to pass data',
      exercises: 7
    },
    {
      part:'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App