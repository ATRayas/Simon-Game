//alert("fuck you");

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
function nextSquence(){
    var randomNumber = Math.floor((Math.random() * 4)); // gens random num from 0 to 3
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

    
}
$(".btn").on("click", function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
    
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    var delayInMilliseconds = 100; //.1 second
    setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
    }, delayInMilliseconds);
}