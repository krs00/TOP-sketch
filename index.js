// get necessary dom nodes
const canvas = document.querySelector('#canvas')
const rangeInput = document.querySelector('#myrange') 
const colorPicker = document.querySelector('#colorpicker')
const gridItems = document.getElementsByClassName('item')
const gridLabelNum = document.getElementsByClassName('gridlabelnum') 
let gridSize = rangeInput.value
let currentColor = 'black'
let isMouseDown

// checks if mouse is held down
canvas.addEventListener('mousedown', function(e) {
  e.preventDefault();
  isMouseDown = true

})
document.addEventListener('mouseup', () => isMouseDown = false)


// updates current color variable everytime colorpicker value is changes
colorPicker.addEventListener("input", (e) => currentColor = e.target.value)
// updates the gridSize variable to be equal to slider input
rangeInput.addEventListener("input", (e) => gridSize = e.target.value) 
// runs createGrid function everytime the value of the rangeslider changes
rangeInput.addEventListener("input", () => createGrid(gridSize))

// updates grid size label numbers
rangeInput.addEventListener("input", () => {
  for (let i = 0; i < gridLabelNum.length; i++) {
    gridLabelNum[i].innerText = gridSize
  }
}) 

// updates background color of div to currentColor value if dragged
function changeColorOnDrag(e) {
  if (isMouseDown) {
    e.target.style.backgroundColor = `${currentColor}`
  }
}

// updates background color of div to currentColor value if clicked
function changeColorOnClick(e) {
  e.target.style.backgroundColor = `${currentColor}`
  }

function createGrid(gridSize) {
  canvas.replaceChildren() // remove all canvas divs before generating new ones
  canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div')
    div.classList.add('item')
    div.addEventListener('mouseover', changeColorOnDrag)
    div.addEventListener('mousedown', changeColorOnClick) 
    canvas.appendChild(div)
  }
}


createGrid(16)