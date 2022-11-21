
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


export default Course