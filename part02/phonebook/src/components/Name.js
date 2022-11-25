const Name = (props ) => {
    return(
      <li>{props.person.name} {props.person.number} <button onClick={props.remove}>remove</button></li>
    )
  }

export default Name