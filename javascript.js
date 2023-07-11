const grid = document.querySelector('.grid');
for (let i = 0; i < 16; i++) {
  const gridCell = document.createElement('div')
  gridCell.classList.add('grid-cell')
  gridCell.textContent = 'test'
  grid.appendChild(gridCell)
}