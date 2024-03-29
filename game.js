var wrong = 0;
var toggle = false;
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").on("click", function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    console.log(userClickedPattern);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    var delayInMilliseconds = 100; //.1 second
    setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
    }, delayInMilliseconds);
}

$(document).keypress(function(event){
    
    if(toggle === false){
        if(event.key == "a" || event.key == "A"){ 
            toggle = true;  
            console.log(toggle);
            $("#level-title").text("Level " + level);
            nextSquence();     
                 
        }
    }
    if(wrong === 1){
        toggle = true;
        wrong = 0;
        $("#level-title").text("Level " + level);
        nextSquence();     
        
    }

    
});

function nextSquence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    console.log(level);
    var randomNumber = Math.floor((Math.random() * 4)); // gens random num from 0 to 3
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        var delayInMilliseconds = 1000; //1 second
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSquence();
            }, delayInMilliseconds);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        var delayInMilliseconds = 200; //.2 second
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, delayInMilliseconds);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
        console.log("wrong");
    }
    
}

function startOver() {
    wrong = 1;
    gamePattern = [];
    level = 0;
    userClickedPattern = [];
    
    
}