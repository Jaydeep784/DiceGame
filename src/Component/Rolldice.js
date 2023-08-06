import React from 'react'
import './Gamepage.css'
import { useState } from 'react'
import Showrules from './Showrules'

const Rolldice = (props) => {

    const {dice, rolldice, resetScore, show, setShow} = props
    
    const showRules = () => {
        setShow((prev) => !prev);
        if(show ? <Showrules /> : '');
    }

  return (
    <div className='rollDice'>
        <div className='rollDiceImg' onClick={rolldice}>
            <img src={`/Images/dice_${dice}.png`} alt='diceImg'/>
        </div>
        <p>Click on Dice to roll</p>
        <button className = "button outline" onClick={resetScore}>Reset Score</button>
        <button className='button' onClick={showRules}>{show ? 'Hide' : 'Show'} Rules</button>
        {show && <Showrules />}
    </div>
  )
}

export default Rolldice