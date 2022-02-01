import "./Loser.css"

const Loser = ({score, turns}) => {

     const refreshPage = () => {
        window.location.reload();
     }

    return (
        <div className="loser_text">
             <h2>Sorry, you lost ☹</h2> 
             <h6>You need to score at least 50 points in under 10 moves</h6>
             <h4>Your Score: {score} </h4>
             <h4># of Moves: {turns} </h4>
           <button className="glow-on-hover" onClick={() => refreshPage()}>Click to Try Again</button>
        </div>
    )
}
export default Loser