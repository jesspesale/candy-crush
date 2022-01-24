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

  const checkForColumnOfThree = () => {
    for(let i = 0; i < 47; i++){
      const columnOfThree = [i, i +width, i +width * 2]
      const decidedColor = currentColorArrangement[i]

      if(columnOfThree.every(square => currentColorArrangement[square] === decidedColor)){
        // checking if 3 columns in a row are the same color as the first one checked
          columnOfThree.forEach(square => currentColorArrangement[square] = " ")
      }
    }
  }

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

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfThree()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    // run a new interval every 100ms
    return () => clearInterval(timer)
  }, [checkForColumnOfThree], currentColorArrangement)


  console.log(currentColorArrangement)


  return (
    <div className="App">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            style={{backgroundColor: candyColor}}
            alt={candyColor}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
