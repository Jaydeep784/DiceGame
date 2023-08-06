import React from 'react'
import './Homepage.css'

const Homepage = (props) => {
  return (
    <div className='homeMainContainer'>
        <div className='homeImage'>
            <img src='/Images/dices.jpg' alt='dices'/>
        </div>
        <div className='homeContent'>
            <h1>DICE GAME</h1>
            <button onClick={props.togglePage}>Play Now</button>
        </div>
    </div>
  )
}

export default Homepage