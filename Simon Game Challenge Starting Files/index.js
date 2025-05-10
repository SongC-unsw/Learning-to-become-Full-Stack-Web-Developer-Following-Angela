
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 1;
let started = false;
const nextSequence = () => {
    const maxRandom = 4;
    const randomNumber = Math.floor(Math.random() * maxRandom)
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    return randomChosenColor;
};
const playSound = (chosenColor) => {
    const audio = new Audio(`./sounds/${chosenColor}.mp3`);
    audio.play();
}
const flashButton = (chosenColor) => {
    $(`#${chosenColor}`).fadeOut(200).fadeIn(200);
    playSound(chosenColor);
}
const handleStart = () => {
    $("body").css("background-color", "#011F3F")
    level = 1;
    userClickedPattern = [];
    const chosenColor = nextSequence();

    flashButton(chosenColor);
    
    $("#level-title").text(`Level ${level}`);
    
};
const handleNext = () => {
    level++;
    const chosenColor = nextSequence();
    flashButton(chosenColor);
    $("#level-title").text(`Level ${level}`);

}
// on Click button
$(".btn").click(function () {
    const btnColor = this.id;
    userClickedPattern.push(btnColor);
    const currentIndex = userClickedPattern.length - 1;
    if (btnColor !== gamePattern[currentIndex]) {
        playSound("wrong");
        $("body").css("background-color", "red");
        $("#level-title").text(`Game over, press any key to start over`);
        started = false;
        userClickedPattern = [];
        gamePattern = [];
    } else {
        if (gamePattern.length === userClickedPattern.length) {
            userClickedPattern = [];
            handleNext();
        }

    }
    
    playSound(btnColor);
    
})


// start the game
$(document).keypress(() => {
    if (started !== true) {
        handleStart();
        started = true;

    }

});
// hover effect
$(".btn").on("mouseover", function () {
    $(this).css("opacity", "0.7");
});
$(".btn").on("mouseout", function () {
    $(this).css("opacity", "1");
})
