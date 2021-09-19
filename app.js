const board = document.querySelector('#board')
const SQUARES_NUMBER = 700
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'violet', 'emeraid', 'gold', 'forest']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  
  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}
function getRandomColor() {  
  return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color

}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'

}