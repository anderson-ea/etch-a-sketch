const grid = document.querySelector('.grid');
for (let i = 0; i < 3750; i++) {
  const gridCell = document.createElement('div')

  gridCell.classList.add('grid-cell')

  gridCell.addEventListener('mouseover', () => {
    gridCell.style.background = "black"
  })

  grid.appendChild(gridCell)
}

const clearBoard = () => {
  const allItems = document.querySelectorAll('.grid-cell')
  allItems.forEach((item) => {
    item.style.background = "rgb(199, 199, 199)"
  })
}

const reset = document.querySelector('#left-circle')
reset.addEventListener("click", () => clearBoard())

let size

const changeSize = document.querySelector('#right-circle')
changeSize.addEventListener("click", () => {
  clearBoard()
  
  !size ?  
    grid.style = 'grid-template-columns: repeat(30, 1fr); grid-template-rows: repeat(20, 1fr);' :
    grid.style = 'grid-template-columns: repeat(75, 1fr); grid-template-rows: repeat(50, 1fr);'
  
  size = !size
})