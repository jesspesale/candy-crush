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

  const [currentColorArangement, setCurrentColorArangement] = useState([])

  const createBoard = () => {
    const randomeColorArangement = []
    for(let i = 0; i < width * width; i++){
      const randomNumber = Math.floor(Math.random() * candyColors.length)
      // floor for rounded up on numbers, choose a random number that is 1-8
      const randomColor = candyColors[randomNumber]
        randomeColorArangement.push(randomColor)
    }
    setCurrentColorArangement(randomeColorArangement)
    console.log(currentColorArangement)
  }

  useEffect(() => {
    createBoard()
  }, [])
  // the empty array makes it so the effect will only run once after state changes

  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
