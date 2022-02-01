import "./Winner.css"

const Winner = ({score, turns}) => {

     const refreshPage = () => {
        window.location.reload();
     }

    return (
        <div>
            <div className="wrapper">
                <h2>You won with a score of {score}</h2>
                You won with a score of {score}
                 in {turns} moves
            </div>
        </div>
    )
}

export default Winner
