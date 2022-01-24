
const Scoreboard = ({score}) => {

    return (
        <div className="score-board-box">
            <div className="score-board">
                <h2>
                    Your Score: {score}
                </h2>

            </div>
        </div>
    )
}

export default Scoreboard
