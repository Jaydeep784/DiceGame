import Gamepage from "./Component/Gamepage";
import Homepage from "./Component/Homepage";
import './App.css'
import { useState } from "react";

function App() {

  const [startGame, setStartGame] = useState(false)

  const togglePage = () => {
    setStartGame((prev) => !prev)
  }

  return (
    <div className="App">
      {(startGame ? <Gamepage /> : <Homepage togglePage={togglePage}/>) }
    </div>
  );
}

export default App;
