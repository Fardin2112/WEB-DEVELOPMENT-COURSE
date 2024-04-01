// empty array
const gamePattern = [];

// button color in game
const ButtonColor = ["red","blue","green","yellow"];

// function to generate random number 
function nextSquence(){
    let randomNumber = Math.floor(Math.random()*4)

    // generate random color in buttoncolor array
    randomChosenColor = ButtonColor[randomNumber]

    // pushing the value of randchosencolor in gamepattern
    gamePattern.push(randomChosenColor)

    // selcting by randomChosenColor and blink by jQuery
    $(`#${gamePattern[0]}`).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

function handler(){
    $("docu")
}










