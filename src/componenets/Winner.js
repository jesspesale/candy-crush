

const Winner = ({score, turns}) => {

     const refreshPage = () => {
        window.location.reload();
     }

    return (
        <div>
            <h2>You won with a score of: {score}</h2>
            <h2>in {turns} moves</h2>
        </div>
    )
}

export default Winner
