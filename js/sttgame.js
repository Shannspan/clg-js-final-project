//TIC TAC TOE ref youtube 'Coding with Russ' BEACHCOMBING PAGE
//Create array to hold board data
let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
//Define game variables
let player = 1;
let gameOver = false;

//Pull in cells from DOM
const cellElements = document.querySelectorAll(".cell");
//Pull in result text from DOM
const resultElement = document.getElementById("result");

//add event listener using forEach loop
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index)
  });
});

//Create function for placing markers
function placeMarker(index) {
  //detemine row and column from index
  let col = index % 3
  //console.log(col);
  let row = (index - col) / 3
  //Check if current cell is empty... and later on add in gameOver so the game actually stops once there is a winner or a tie.
    if(boardData [row][col] ==0 && gameOver == false) {
    boardData [row][col] = player;
    //change player
    player *= -1;
    //console.log(boardData);
    //Update the screen with Markers by invoking a function
    drawMarkers();
    //Check if there is a winner by invoking a function
    checkResult ();
  }} 

// Create function for drawing player markers
function drawMarkers() {
  //Iterate over rows with for loops
  for(let row = 0; row < 3; row++) {
  //Iterate over columns with for loop
    for(let col = 0; col < 3; col++){
    //check if player 1's marker
    if(boardData[row][col] == 1){
    //update cell class to add a cross
    cellElements[(row * 3) + col].classList.add("cross");
    } else if (boardData[row][col] == -1) {
      //update cell class to add circle
    cellElements[(row * 3) + col].classList.add("circle");
    }}}}
//Create function for checking the result of the game -  using maths. Player 1 wins on the board when 3 cells in any direction add up to 3. Likewise, player 2 will add up to -3. (needs to have a return after each endGame condition is met so that there is only one winner or a tie)
function checkResult() {
  //check rows and columns for winner using a for loop
  for(let a = 0; a < 3; a++) {
    let rowSum = boardData[a][0] + boardData[a][1] + boardData[a][2];
    let colSum = boardData[0][a] + boardData[1][a] + boardData[2][a];
    if(rowSum == 3 || colSum == 3) {
      //Player 1 wins
      endGame("White Clam shell");
      return
    } else if(rowSum == -3 || colSum == -3) {
      //Player 2 wins
      endGame("Blue Mussell shell");
      return
    }
  }
//Check diagonals for winner 
let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
if(diagonalSum1 == 3 || diagonalSum2 == 3) {
  //Player 1 wins
  //console.log("Clam shell player wins"); debug complete so now add endGame and a return.
  endGame("White Clam shell");
  return
} else if(diagonalSum1 == -3 || diagonalSum2 == -3) {
  //Player 2 wins
  //console.log("Blue Mussell shell player wins");
  endGame("Blue Mussell shell");
  return
}
//Check for a tie 
if(boardData[0].indexOf(0) == -1 &&
  boardData[1].indexOf(0) == -1 &&
  boardData[2].indexOf(0) == -1) {
    //console.log("Tied game");
    endGame(0);
    return
  }
}
//Function to end the game and display the result
function endGame(winner) {
  //Trigger game over
  gameOver = true; 
  //Check if game ended in a tie
  if (winner == 0) {
    console.log("Tied game"); 
    //...now add to screen for player interaction
    resultElement.innerText = "It's a tie!"
  } else {
    console.log(`${winner} player wins!`);
    resultElement.innerText = `${winner} player wins!`
  }
}
//Restart game
const restartButton = document.getElementById("restart");
//Add event listener to restart button

restartButton.addEventListener("click", () => { 
 //reset game variables
 boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
player = 1;
gameOver = false;
//reset game board
cellElements.forEach(cell => {
  cell.classList.remove("cross", "circle");
});
//Reset result text
resultElement.innerText = ""
});

//Manipulating the DOM to change style - using classList, eventListener & querySelector

let restartBtn = document.querySelector(".restart");

//restartBtn.classList.toggle("restart-pop");

function poppyRestart() {
  restartBtn.classList.toggle("restart-pop");
}

restartButton.addEventListener("click", poppyRestart);



// Object constructor function 
function beachPick(beach, location, type, vehicle) {
  this.name = beach;
  this.location = location;
  this.type = type;
  this.vehicle = vehicle;
  this.orientation = function() {
    return this.name + ", " + this.location + "."  };
}

// Create a new beachPick object (myFave)
const myFave = new beachPick("Turtle Cliffs", "5 km South of Coral Bay", "Very soft sand, driving on beach is not recommended", "4WD required");
//check the new object has been made
console.log(myFave);

// Fetch data from new object and change page output 
document.getElementById("fave-beach").innerHTML =
"My favourite beach on the coral coast of Western Australia is " + myFave.orientation(); 

//Declare Array
let shells = ["Tun", "Turban", "Top Snail", "Cowry", "Limpet", "Clam", "Trochus", "Baler", "Pipi", "Mussel", "Abalone", "Cone Snail"];

 //add item to end of array using push method
 shells.push("Operculum");
 console.log(shells);

 //put array into a-z order using sort method
 shells.sort();
 console.log(shells);

//remove last item from array using pop method
shells.pop();
console.log(shells);

 //isolate items in array
 console.log(shells[5]);

 console.log(shells[0]);

 //use length property to find number of items in array

 console.log(shells.length);

//find method to locate item in the shells array indexed as 10 (therefore 11th in array listing as numbering starts from 0)

function findTen(index10)  {
return index10 = [10];
}

console.log(shells.find(findTen));

//change page output using array

document.getElementById("shell-array").innerHTML = "While beachcombing we found " + shells.length + " types of shells, including:" + "<br>" + shells.join(", ");

//Use function and find to isolate individual indexed item from shell array. Still trying to figure out howto style that index item once it is isolated.

function colourFirst(indexItem) {
  return indexItem = [0];
}

console.log(shells.find(colourFirst));

//This only styles the element with an id (eg all text within)

document.getElementById("shell-array").style.color = "#D5D3D9";

//Breaking a loop once the array reaches a certain point?
const gameScore = [10, 2, 27, 19, 51, 75, 35, 68, 82];

//Sort in to ascending numerical order
gameScore.sort(function(a, b){return a-b});
console.log(gameScore);

//While loop
let a = 2;

while (a < gameScore.length) {
  console.log(gameScore[a]);
  a++;
}















