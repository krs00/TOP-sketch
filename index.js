const canvas = document.querySelector('#canvas')
const rangeInput = document.querySelector('#myRange') 
let gridSize = rangeInput.value 


// updates the gridSize variable to be equal to slider input
rangeInput.addEventListener("input", (e) => gridSize = e.target.value)

// runs createGrid function everytime the value of the rangeslider changes
rangeInput.addEventListener("input", () => createGrid(gridSize))



function createGrid(gridSize) {

  canvas.replaceChildren() 
  canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div') 
    div.style.backgroundColor = 'blue'
    canvas.appendChild(div)
  }
}

createGrid(8)