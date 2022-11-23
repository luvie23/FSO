const Input = (props) => {
    return(
      <div>
        {props.text}<input  
        value={props.value}
        onChange={props.function}
        />
      </div>
    )
  }

export default Input