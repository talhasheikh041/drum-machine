import { useState, useEffect, useRef } from "react"
import DrumBtn from "./DrumBtn"
import AUDIOS from "./sounds"

function App() {
  const [displayText, setDisplayText] = useState("DISPLAY")
  useEffect(() => {
    document.addEventListener("keypress", handleKeyDown)

    return () => {
      document.removeEventListener("keypress", handleKeyDown)
    }
  }, [])

  function handleClick(id, name) {
    const audio = document.getElementById(id)
    audio.play()
    setDisplayText(name)
  }

  function handleKeyDown(e) {
    const audioObj = AUDIOS.find((audio) => {
      return audio.value.toLowerCase() === e.key.toLowerCase()
    })
    if (!audioObj) {
      return
    }
    const btn = document.getElementById(audioObj.id)
    btn.focus()
    const audio = document.getElementById(audioObj.value)
    audio.play()
    setDisplayText(audioObj.id)
  }

  const drumBtns = AUDIOS.map((drumbtn) => {
    return (
      <DrumBtn
        key={drumbtn.id}
        id={drumbtn.id}
        value={drumbtn.value}
        sound={drumbtn.sound}
        handleClick={handleClick}
        handleKeyDown={handleKeyDown}
      />
    )
  })

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{displayText}</div>
        {drumBtns}
      </div>
    </div>
  )
}

export default App
