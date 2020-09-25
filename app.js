var tileImages = ['allblacks.png', 'braveblossoms.png', 'irfu.png', 'lesbleus.png', 'roses.png', 'springboks.png']
var gameboard = document.getElementById('gameboard')
var messageTop = document.getElementById('message')
var buttonMessage = document.getElementById('gameControl')
var myTime = document.getElementById('myTime')
var cardsflippedover = 0
var solutionArray = tileImages.concat(tileImages)
var lastCardPicked = -1
var timer = ''
var score = 0
var mess = ''
var seconds = 0
var mseconds = 0
var minutes = 0
var hours = 0
var t = 0

flipArray = []

document.getElementById('gameControl').addEventListener('click', startGame)

//console.log(solutionArray)

//console.log(solutionArray)

startGame()

function startGame() {
    //clear Gameboard
    shuffleArray(solutionArray)
    timerX()
    score = 0
    seconds = 0
    mseconds = 0
    minutes = 0
    hours = 0
    gameboard.innerHTML = "";
    buttonMessage.innerHTML = "Restart";
    messageText("Click a Tile To Start")
    //Gameboard Create
    for (let i = 0; i < solutionArray.length; i++) {
        gameboard.innerHTML += '<div class="col-md-3 col-xs-4 gametile"><img id="cardz'+i+'" src="crab.jpg" onclick="pickCard(\''+solutionArray[i]+'\',\''+i+'\',this);return false;" class="flipimage"></div>'
    
    }
}



function pickCard(a,b,c) {
    //console.log(c)
    if (cardsflippedover < 2 && lastCardPicked != b){
        flipArray[cardsflippedover] = solutionArray[b]
        flipArray[(cardsflippedover + 2)] = c.id
        cardsflippedover++
        c.src = '/'+solutionArray[b]
            if (cardsflippedover === 2) {
                    if (flipArray[0] === flipArray[1]) {
                        messageText("Match Found")
                        score++
                        pickAgain()
                        //Check for game over
                        if (tileImages.length === score) {
                            messageText("Game Over, Click Play to Restart")
                            //console.log('End Game')
                            gameDone()
                        }
                    } else {
                        timer = setInterval(hideCard, 3000)
                        messageText("Not Found")
                        //console.log('different')
                    }
                }
    }
    //console.log(flipArray)
    lastCardPicked = b
}

function messageText(message) {
    clearInterval(mess)
    messageTop.innerHTML = message
    mess = setInterval(messageText, 1000, 'Find A Match')
}

function addTime() {
    seconds++
    if (seconds >= 60) {
        minutes++
        if (minutes >= 60) {
            minutes = 0
            hours++
        }
    }
    myTime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? mintues : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds)
    timerX()
}

function timerX() {
    t = setTimeout(addTime, 1000)
}

function gameDone() {
    messageText("Game Over")
    buttonMessage.innerHTML = "Click to Play Again";
}

function pickAgain() {
    cardsflippedover = 0
    flipArray = []
    clearInterval(timer)
}

function hideCard() {
    document.getElementById(flipArray[2]).src="crab.jpg"
    document.getElementById(flipArray[3]).src="crab.jpg"
    pickAgain()
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