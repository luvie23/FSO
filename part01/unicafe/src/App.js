import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}
    </button>
  )
}

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const Feedback = (props) => {
  return(
    <p>{props.text} {props.feedback}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const func = (option) => {
    if (option === 'good'){
      setGood(good + 1)

    } else if (option === 'neutral'){
      setNeutral(neutral + 1)

    } else if (option === 'bad'){
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <Header text='Give feedback'/>
      <Button handleClick={() => func('good')} text='good'/>
      <Button handleClick={() => func('neutral')} text='neutral'/>
      <Button handleClick={() => func('bad')} text='bad'/>
      <Header text='Statistics'/>
      <Feedback feedback={good} text='good'/>
      <Feedback feedback={neutral} text='neutral'/>
      <Feedback feedback={bad}text='bad'/>
    </div>
  )
}

export default App
