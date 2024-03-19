
// for selecting image for dice
let randomNumber1 = Math.floor(Math.random()* 6) + 1;
let randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomDiceImage1 = "./images/dice" + randomNumber1 +".png";
var randomDiceImage2 = "./images/dice" + randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2)

// for show who wins

var result = document.querySelector("h1");

if(randomDiceImage1 < randomDiceImage2){
    result.innerHTML = "player 2 wins 🚩";
}
else if (randomDiceImage1 > randomDiceImage2){
    result.innerHTML = "player 1 wins 🏳️"
}
else {
    result.innerHTML = "Match Draw 🎌"
}