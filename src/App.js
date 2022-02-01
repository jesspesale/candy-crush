import Game from "./componenets/Game"
import './App.css';
import { useState } from "react";
import Scoreboard from "./componenets/Scoreboard";

const  App = () => {

  const [turns, setTurns] = useState(0)
  const [score, setScore] = useState(0)

  console.log(score)

  return (
    <div className="app">
      <h1 className="game_name">Welcome to M&M Crush!</h1>
      <div className="how_to_play">
          <h2>You must score at least 50 points in under 15 moves to win</h2>
          <h3></h3>
      </div>
      <Game turns={turns} score={score} setScore={setScore} setTurns={setTurns}/> 
       <Scoreboard score={score} turns={turns}/>
    </div>
  );
}

export default App;
