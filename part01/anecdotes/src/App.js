import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Votes = (props) => {
  console.log(props.votes)
  if (props.votes === undefined) {
    return(
      <p>no votes yet</p>
    )
  } else{
    return(
      <p>Has {props.votes} votes</p>
      
    )
  }

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState({})



  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
    console.log(points)
  }

  const vote = (element) =>{
    const copy = {...points}
    if (!copy.hasOwnProperty(element)){
      copy[element] = 1
      setPoints(copy)
      console.log(points)
    } else {
      copy[element] += 1
      setPoints(copy)
      console.log(points)
    }
  }


  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      <Votes votes={points[selected]}/>
      <Button handleClick={() => {vote(selected)}} text='vote'/>
      <Button handleClick={randomAnecdote} text='next anecdote'/>
    </div>
  )
}

export default App