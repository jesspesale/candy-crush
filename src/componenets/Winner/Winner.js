import "./Winner.css"

const Winner = ({score, turns}) => {

     const refreshPage = () => {
        window.location.reload();
     }

    return (
        <div>
            <div className="wrapper">
                <h2 className="winner_box">
                    <h1>Congrats you won!</h1>
                    <h2><strong>Your Score:</strong> {score} </h2>
                    <h2><strong># of Moves:</strong>  {turns} </h2>
                </h2>
                <button className="glow-on-hover" onClick={() => refreshPage()}>Click to Play Again</button>
            </div>
        </div>
    )
}

export default Winner
