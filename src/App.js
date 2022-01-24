import { useEffect, useState } from "react"

const width = 8

const candyColors = [
  "blue", 
  "green", 
  "orange",
  "purple",
  "red",
  "yellow"
]

const  App = () => {

  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {

    const randomColorArrangement = []

    for(let i = 0; i < width * width; i++){
      const randomNumber = Math.floor(Math.random() * candyColors.length)
      // floor for rounded up on numbers, choose a random number that is 1-8
      const randomColor = candyColors[randomNumber]
        randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
    
  }

  useEffect(() => {
    createBoard()
  }, [])
  // the empty array makes it so the effect will only run once after state changes


  console.log(currentColorArrangement)


  return (
    <div className="App">
      <div className="game">
        

      </div>
    </div>
  );
}

export default App;
