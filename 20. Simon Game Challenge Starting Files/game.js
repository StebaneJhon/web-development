var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function playSound(name) {
    var sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColour) {
    $(currentColour).addClass("pressed")
    setTimeout(function () {
        $(currentColour).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (hasFinishedSequence()) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
    }
    } else {
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart.");
        startOver();
    }
}

function hasFinishedSequence() {
    if (userClickedPattern.length === gamePattern.length) {
        return true;
    } else {
        return false;
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function nextSequence() {
    userClickedPattern = []
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
}

$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(this);
    checkAnswer(userClickedPattern.length - 1)
})

$(document).on("keydown", function () {
    if (gamePattern.length <= 0) {
        nextSequence();
        $("h1").text("Level 0"); 
    }
})



