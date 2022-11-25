const Name = (props ) => {
    return(
      <li className='note'>{props.person.name} {props.person.number} <button onClick={props.remove}>remove</button></li>
    )
  }

export default Name