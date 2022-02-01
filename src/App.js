import Game from "./componenets/Game"
import './App.css';
import { useState } from "react";
import Scoreboard from "./componenets/Scoreboard";

const  App = () => {

  const [turns, setTurns] = useState(0)
  const [score, setScore] = useState(0)


      const checkWin = () => {
        if(score >= 50 && turns < 10){
            return (
                <div>
                    <h2>You won with a score of: {score}</h2>
                </div>
            )
        } else if (score < 50 && turns >= 10){
            return (
                <div className="display_score">
                    <h2>Sorry, you lost ☹</h2> 
                </div>
            )
        } else {
            return (
                <div>
                  <h1 className="game_name">Welcome to M&M Crush!</h1>
                  <div className="how_to_play">
                      <h2>You must score at least 50 points in under 15 moves to win</h2>
                      <h3></h3>
                  </div>
                  <Game 
                    turns={turns}      setScore={setScore}
                    score={score}      setTurns={setTurns}
                  /> 
                  <Scoreboard score={score} turns={turns}/>
                </div>
                )
            }
    }

  return (
    <div className="app">
      {checkWin()}
      {/* <h1 className="game_name">Welcome to M&M Crush!</h1>
      <div className="how_to_play">
          <h2>You must score at least 50 points in under 15 moves to win</h2>
          <h3></h3>
      </div>
      <Game 
        turns={turns} 
        score={score} 
        setScore={setScore} 
        setTurns={setTurns}
      /> 
       <Scoreboard score={score} turns={turns}/> */}
    </div>
  );
}

export default App;
