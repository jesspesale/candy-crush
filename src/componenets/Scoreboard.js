const Scoreboard = ({score, turns}) => {
    // console.log(score)

    // const checkWin = () => {
        // if(score >= 50 && turns < 15){
        //     return (<h2>You won!</h2>)
        // } else (score < 100 && turns === 5){
        //     return (
        //         <div>
        //             <h3>Your Score: {score}</h3>
        //             <h3>Number of Moves Made: {turns}</h3>
        //         </div>
        //     )
        // }


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
