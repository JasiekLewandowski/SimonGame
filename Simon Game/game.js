var gamePattern = [];
var sequenceCount = 0;
var playerClicksCount = 0;

$(document).keydown(function(event) {
  $("h1").html("Level 1");
  setTimeout(function() {
    var firstButton = buttonLottery();
    gamePattern.push(firstButton);
    sequenceCount++;
    clickAnimation(firstButton);
  }, 200);
});

$(".btn").click(function() {
  var buttonId = $(this).attr("id");
  if (buttonId === gamePattern[playerClicksCount]) {
    clickAnimation(buttonId);
    playerClicksCount++;
    if (playerClicksCount === gamePattern.length) {
      $("h1").html("Level " + (gamePattern.length + 1));
      playerClicksCount = 0;
      var newElement = buttonLottery();
      gamePattern.push(newElement);
      setTimeout(function() {
        clickAnimation(gamePattern[gamePattern.length - 1]);
      }, 800);
    }
  } else {
    gameOver();
  }
});

function gameOver() {
  gamePattern = [];
  playerClicksCount = 0;
  sequenceCount = 0;
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $("h1").html("Press Any Key To Start Again");
}

function buttonLottery() {
  var luckyButtonId = Math.floor(Math.random() * 4);
  switch (luckyButtonId) {
    case 0:
      return "blue";
    case 1:
      return "green";
    case 2:
      return "red";
    case 3:
      return "yellow";
  }
}

function clickAnimation(buttonId) {
  buttonAnimation(buttonId);
  buttonSound(buttonId);
}

function buttonAnimation(buttonId) {
  $("." + buttonId).addClass("pressed");
  setTimeout(function() {
    $("." + buttonId).removeClass("pressed");
  }, 100);
}

function buttonSound(buttonColor) {
  switch (buttonColor) {
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
  }
}
