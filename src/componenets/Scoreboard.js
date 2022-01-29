const Scoreboard = ({score, turns}) => {

    const checkWin = () => {
        if(score >= 50 && turns < 15){
            // return <h2>You won!</h2> 
            return (
                <div>
                    <h2>You won!</h2>
                    <button onClick={refreshPage}>Play Again</button>
                </div>
            )
        } else if (score < 50 && turns < 15){
            return (
                <div>
                    <h3>Your Score: {score}</h3>
                    <h3># of Moves: {turns}</h3>
                </div>
            )
        } else {
            return <h2>Sorry, you lost ☹</h2>
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
