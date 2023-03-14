import React from "react"

function DrumBtn(props) {
  return (
    <button
      id={props.id}
      onClick={() => props.handleClick(props.value, props.id)}
      onKeyDown={(e) => props.handleKeyDown(e)}
      className="drum-pad"
    >
      {props.value}
      <audio id={props.value} className="clip" src={props.sound}></audio>
    </button>
  )
}

export default DrumBtn
