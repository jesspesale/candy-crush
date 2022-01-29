import "./Scoreboard.css"

const Scoreboard = ({score, turns}) => {

    const checkWin = () => {
        if(score >= 50 && turns < 10){
            return (
                <div>
                    <h2>You won with a score of: {score}</h2>
                    <button className="refresh_button" onClick={refreshPage}>Try Again!</button>
                </div>
            )
        } else if (score < 50 && turns < 10){
            return (
                <div className="display_score">
                    <h3 className="score">Your Score: {score}</h3>
                    <h3># of Moves: {turns}</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Sorry, you lost ☹</h2> 
                    <button className="refresh_button" onClick={refreshPage}>Play Again!</button>
                </div>
                )
            }
    }

        const refreshPage = ()=>{
            window.location.reload();
        }

    return (
        <div className="score-board-box">
            <div className="score-board">
                {checkWin()}
                {/* <button onClick={refreshPage}>Play Again</button> */}
            </div>
        </div>
    )
}

export default Scoreboard
