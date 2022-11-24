

const Name = (props ) => {

    return(
      <li >{props.country.name.common} <button onClick={() => {
        props.onClickFunction(props.country.name.common)
      }}>test</button></li>
    )
  }

export default Name