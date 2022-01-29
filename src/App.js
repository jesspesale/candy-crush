import Game from "./componenets/Game"
import './App.css';

const  App = () => {

  return (
    <div className="app">
      <h1 className="game_name">Welcome to M&M Crush!</h1>
      <div className="how_to_play">
          <h2>You must get at least 50 points in under 15 moves</h2>
          <h3></h3>
      </div>
      <Game /> 
    </div>
  );
}

export default App;
