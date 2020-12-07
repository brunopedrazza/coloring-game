let white = '#ffffff'
let currentColor = white

let isErasing = false

var mouseDown = false
document.body.onmousedown = function () {
    mouseDown = true
}
document.body.onmouseup = function () {
    mouseDown = false
    isErasing = false
}

const dimension = 10
const colorOptions = ['#ffce00', '#008cff', '#f48058', '#ffab8a']

createGameTable(dimension)
createColorOptionsTable(colorOptions)
createRestartButton()

function createGameTable(dimension) {
    var table = document.getElementById('table')
    for (var line = 0; line < dimension; line++) {
        for (var column = 0; column < dimension; column++) {
            var square = (10 * line + column + 1).toString()
            var cel = document.createElement('button')
            cel.className = 'cel'
            cel.id = square
            cel.style.backgroundColor = currentColor
            cel.addEventListener('mouseover', onCelMouseOver)
            cel.addEventListener('mousedown', onCelMouseDown)
            number = document.createTextNode(square)
            cel.appendChild(number)
            table.appendChild(cel)
        }
        var divisor = document.createElement('div')
        divisor.className = 'divisor'
        table.appendChild(divisor)
    }
}

function createColorOptionsTable(colorOptions) {
    var colorTable = document.getElementById('color-table')
    for (const colorOption of colorOptions) {
        var option = document.createElement('button')
        option.id = colorOption
        option.className = 'color-cel'
        option.style.backgroundColor = colorOption
        option.addEventListener('click', onColorClick)
        colorTable.appendChild(option)
    }
}

function createRestartButton() {
    var colorTable = document.getElementById('color-table')
    var restartButton = document.createElement('button')
    restartButton.className = 'restart-cel'
    restartText = document.createTextNode('reiniciar')
    restartButton.appendChild(restartText)
    restartButton.addEventListener('click', onRestartClick)
    colorTable.appendChild(restartButton)
}

function onCelMouseOver(e) {
    if (mouseDown) {
        changeCelColor(e.target);
    }
}

function onCelMouseDown(e) {
    changeCelColor(e.target)
}

function changeCelColor(cel) {
    let backgroundColor = rgb2hex(cel.style.backgroundColor)
    if (backgroundColor == currentColor && !mouseDown || isErasing) {
        cel.style.backgroundColor = white
        isErasing = true
    } else {
        cel.style.backgroundColor = currentColor
        isErasing = false
    }
}

function onColorClick(e) {
    var parent = e.target.parentNode
    unselectAllColors(parent)
    e.target.classList.add('color-cel-selected')
    currentColor = e.target.id
}

function onRestartClick(e) {
    var parent = e.target.parentNode
    unselectAllColors(parent)
    currentColor = white
    var table = document.getElementById('table')
    var child = table.firstChild
    while (child) {
        child.style.backgroundColor = white
        child = child.nextSibling
    }
}

function unselectAllColors(colorTableNode) {
    var child = colorTableNode.firstChild
    while (child) {
        child.classList.remove('color-cel-selected')
        child = child.nextSibling
    }
}

//Helpers
//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

var hexDigits = new Array
    ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}