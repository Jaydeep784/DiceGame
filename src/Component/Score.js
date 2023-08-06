import React from 'react'
import './Gamepage.css'

const Score = (props) => {

  const {score, setScore} = props

  return (
    <div className='score'>
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
  )
}

export default Score