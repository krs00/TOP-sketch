const canvas = document.querySelector('#canvas')
const rangeInput = document.querySelector('#myrange') 
const colorPicker = document.querySelector('#colorpicker') 
let gridSize = rangeInput.value
let currentColor = 'black'


// updates the gridSize variable to be equal to slider input
rangeInput.addEventListener("input", (e) => gridSize = e.target.value) 
// runs createGrid function everytime the value of the rangeslider changes
rangeInput.addEventListener("input", () => createGrid(gridSize))

// updates the currentColor variable to be equal to picker input
colorPicker.addEventListener("input", (e) => currentColor = e.target.value)   


function changeColor(e) {
  e.target.style.backgroundColor = `${currentColor}` 
}



function createGrid(gridSize) {
  canvas.replaceChildren() // remove all canvas divs before generating new ones
  canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div')
    div.addEventListener('click', changeColor)
    canvas.appendChild(div)
  }
}


createGrid(8)