// MINI GAME
let gameNum = 85;
let userNum = prompt("Entre You Number");
while(gameNum != userNum){
    userNum = prompt("You Guess The Wrong Number! Try Again!")
}

swal({
    title: "GAME SCORE",
    text: "YOU WIN THE GAME! 👍",
    timer: 3000
  });