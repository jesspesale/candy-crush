const Scoreboard = ({score, turns}) => {

    const checkWin = () => {
        if(score >= 200 && turns < 5){
            return <h2>You won!</h2>
        } else if (score < 200 && turns < 5){
            return (
                <div>
                    <h3>Your Score: {score}</h3>
                    <h3>Number of Moves Made: {turns}</h3>
                </div>
            )
        } else {
            return <h2>Sorry, you lost ☹</h2>
        }
    }

    return (
        <div className="score-board-box">
            <div className="score-board">
                {checkWin()}
            </div>
        </div>
    )
}

export default Scoreboard
