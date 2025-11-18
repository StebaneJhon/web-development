var dices = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

var randomNumber1 = Math.floor(Math.random() * 6);
var randomDice1 = dices[randomNumber1];
var randomNumber2 = Math.floor(Math.random() * 6);
var randomDice2 = dices[randomNumber2];

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

var resultText = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    resultText.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    resultText.textContent = "Player 2 Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
    resultText.textContent = "Draw!";
}