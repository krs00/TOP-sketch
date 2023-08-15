const canvas = document.querySelector('#canvas')



function createGrid(gridSize) {

  canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`


  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div')
    canvas.appendChild(div)
  }
}


createGrid(32);