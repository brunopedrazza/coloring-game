let currentColor = 'white'

onload = function() {
    const dimension = 10
    const colorOptions = ['#ffce00', '#008cff', '#f48058', '#ffab8a']
    
    createGameTable(dimension)
    createColorOptionsTable(colorOptions)
    createRestartButton()
}

function createGameTable(dimension) {
    var table = document.getElementById('table')
    for (var line = 0; line < dimension; line++) {
        for (var column = 0; column < dimension; column++) {
            var square = (10*line + column + 1).toString() 
            var cel = document.createElement('button')
            cel.className = 'cel'
            cel.id = currentColor
            cel.addEventListener('click', onNumberClick)
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

function onNumberClick(e) {
    var cel = e.target
    if (cel.id == currentColor) {
        cel.style.backgroundColor = 'white'
        cel.id = 'white'
    }else {
        cel.style.backgroundColor = currentColor
        cel.id = currentColor
    }
}

function onColorClick(e) {
    var parent = e.target.parentNode
    var child = parent.firstChild
    while (child != null) {
        child.classList.remove('color-cel-selected')
        child = child.nextSibling
    }
    e.target.classList.add('color-cel-selected')
    currentColor = e.target.id
}

function onRestartClick() {
    var table = document.getElementById('table')
    var child = table.firstChild
    while (child != null) {
        child.style.backgroundColor = 'white'
        child = child.nextSibling
    }
}