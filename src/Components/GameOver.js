import React from 'react'
import "../Components/GameOver.css"
const GameOver = ({Reiniciar }) => {
  return (
    <div>
      <h1>GameHover</h1>
      <button onClick={Reiniciar}>Reiniciar</button>
    </div>
  )
}

export default GameOver