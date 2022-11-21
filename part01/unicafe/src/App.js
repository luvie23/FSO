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

const Statistics = (props) => {
  if (props.all === 0){
    return (
      <p>No Feedback Given</p>
    )
  }
  return(
    <p>good {props.good}<br/>neutral {props.neutral}<br/> bad {props.bad}<br/> all {props.all}<br/> average {props.average}<br/> positive {props.positive}</p>
    
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const func = (option) => {
    if (option === 'good'){
      setGood(good + 1)
      setAll(all.concat(1))

    } else if (option === 'neutral'){
      setNeutral(neutral + 1)
      setAll(all.concat(0))


    } else if (option === 'bad'){
      setBad(bad + 1)
      setAll(all.concat(-1))

    }
  }

  function allAverage() {
    if (all.length != 0){
    return (all.reduce((a, b) => a + b) / all.length)
    }
  }

  function positiveFeedback() {
    if (all.length >= 1){
    return (100 * good) / all.length + '%'
    }
  } 

  return (
    <div>
      <Header text='Give feedback'/>
      <Button handleClick={() => func('good')} text='good'/>
      <Button handleClick={() => func('neutral')} text='neutral'/>
      <Button handleClick={() => func('bad')} text='bad'/>
      <Header text='Statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all.length} average={allAverage()} positive={positiveFeedback()}/>
    </div>
  )
}

export default App
