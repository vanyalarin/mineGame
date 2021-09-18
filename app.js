const board = document.querySelector('#board')
const SQUARES_NUMBER = 700
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'violet', 'emeraid', 'gold', 'forest']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  
  square.addEventListener('mouseover', () => 
  setColor(square))
  square.addEventListener('mouseleave', () => 
  removeColor(square))

  board.append(square)
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color

}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'

}