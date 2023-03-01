import React from 'react'
import "../Components/Game.css"

const game = ({VerifyLetter}) => {
  return (
    <div>
        <h1>Game</h1>
         <button onClick={VerifyLetter}>Finalizar</button>
    </div>
  )
}

export default game