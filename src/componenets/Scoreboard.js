import "./Scoreboard.css"

const Scoreboard = ({score, turns}) => {

    return (
        <div className="score-board-box">
            <div className="score-board">
               <div className="display_score">
                    <h3 className="score">Your Score: {score}</h3>
                    <h3># of Moves: {turns}</h3>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard
