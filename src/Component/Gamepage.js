import React from "react";
import Score from "./Score";
import "./Gamepage.css";
import Numberselector from "./Numberselector";
import Rolldice from "./Rolldice";
import { useState } from "react";

const Gamepage = () => {

    const [dice, setDice] = useState(1);
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [error, setError] = useState("")
    const[show, setShow] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rolldice = () => {

        if(!selectedNumber){
            setError("You have not selected any number")
            return
        } 

        const randomNumber = generateRandomNumber(1,7);
        setDice((prev) => randomNumber)
        
        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }
        else{
            setScore((prev) => prev - 2)
        }
    }

    const resetScore = () => {
        setScore(0)
    }

  return (
    <div>
      <div className="NumberMainContainer">
        <Score score = {score} setScore= {setScore}/>
        <Numberselector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <Rolldice dice={dice} rolldice={rolldice} resetScore={resetScore} show={show} setShow={setShow}/>
    </div>
  );
};

export default Gamepage;
