var tileImages = ['allblacks.png', 'braveblossoms.png', 'irfu.png', 'lesbleus.png', 'roses.png', 'springboks.png']
var gameboard = document.getElementById('gameboard')

var solutionArray = tileImages.concat(tileImages)

console.log(solutionArray)
shuffleArray(solutionArray)
console.log(solutionArray)

startGame()

function startGame() {
    //clear Gameboard
    gameboard.innerHTML = "";
    //Gameboard Create
    for (let i = 0; i < solutionArray.length; i++) {
        displayImage(i)
    }
}

function displayImage(i) {
    //console.log(i)
    gameboard.innerHTML += '<div class="col-md-3 col-xs-4 gametile"><img src="/'+solutionArray[i]+'" onclick="pickCard(\''+solutionArray[i]+'\');return false;" class="flipimage"></div>'
}

function pickCard(a) {
    console.log(a)
}

function shuffleArray(d) {
    for (let c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c]
        d[c] = d[b]
        d[b] = a
    }
    return d
}

startGame()