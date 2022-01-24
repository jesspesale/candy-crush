const Scoreboard = ({score, turns}) => {
    return (
        <div className="score-board-box">
            <div className="score-board">
                <h3>
                    Your Score: {score}
                </h3>
                   <h3>Number of Moves Made: {turns}</h3>
            </div>
        </div>
    )
}

export default Scoreboard
