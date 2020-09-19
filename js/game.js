var color = 'white'

onload = function() {
    var dimension = 10
    var colors = ['#ffce00', '#008cff', '#f48058', '#ffab8a']
    var table = document.getElementById('table')
    var colorTable = document.getElementById('color-table')
    for (var line = 0; line < dimension; line++) {
        for (var column = 0; column < dimension; column++) {
            var square = (10*line + column + 1).toString() 
            var cel = document.createElement('button')
            cel.className = 'cel'
            cel.id = color
            cel.style.fontSize = '24px'
            cel.addEventListener('click', onNumberClick)
            number = document.createTextNode(square)
            cel.appendChild(number)
            table.appendChild(cel)
        }
        var divisor = document.createElement('div')
        divisor.className = 'divisor'
        table.appendChild(divisor)
    }

    for (var line = 0; line < colors.length; line++) {
        var colorSquare = colors[line] 
        var cel = document.createElement('button')
        cel.id = colorSquare
        cel.className = 'color-cel'
        cel.style.backgroundColor = colorSquare
        cel.addEventListener('click', onColorClick)
        colorTable.appendChild(cel)
    }
}

function onNumberClick(e) {
    var cel = e.target
    if (cel.id == color) {
        cel.style.backgroundColor = 'white'
        cel.id = 'white'
    }
    else {
        cel.style.backgroundColor = color
        cel.id = color
    }
}

function onColorClick(e) {
    color = e.target.id
}

function restart() {
    var table = document.getElementById('table')
    var child = table.firstChild
    while (child != null) {
        child.style.backgroundColor = 'white'
        child = child.nextSibling
    }
}