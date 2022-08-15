const square = document.querySelectorAll(".part");
const player = document.getElementById("player");
const err = document.getElementById("error");
let whoPlayer = "X";
let winner;
let gameOver = false;

function startGame() {
  player.textContent = `${whoPlayer}'s Turn`;

  square.forEach((part) =>
    part.addEventListener("click", function () {
      selectSquare(part);
    })
  );
}

function selectSquare(part) {

  if(part.textContent === ""){
    part.textContent = whoPlayer;
    if(whoPlayer === "O"){
        part.style.color = "#A10035"
    }
    nextPlayer();
  }
 

  columns();
  rows();
  diagonal();
  draws();

  if (gameOver) {
    player.textContent = `BRAVO! ${winner} Won`;
    square.forEach((part) => (part.style.pointerEvents = "none"));
  }
}

function nextPlayer(){
    if(whoPlayer === "X"){
        whoPlayer = "O";
        player.textContent = `${whoPlayer}' Turn!`
        return;
    }else if(whoPlayer === "O"){
        whoPlayer = "X";
        player.textContent = `${whoPlayer}' Turn!`
    }
}

function columns() {
  let col1 =
    square[0].textContent == square[3].textContent &&
    square[0].textContent == square[6].textContent &&
    square[0].textContent !== "";
  let col2 =
    square[1].textContent == square[4].textContent &&
    square[1].textContent == square[7].textContent &&
    square[1].textContent !== "";
  let col3 =
    square[2].textContent == square[5].textContent &&
    square[2].textContent == square[8].textContent &&
    square[2].textContent !== "";
  if (col1 || col2 || col3) {
    gameOver = true;
  }
  if (col1) return (winner = square[0].textContent);
  if (col2) return (winner = square[1].textContent);
  if (col3) return (winner = square[2].textContent);
}

function rows() {
  let row1 =
    square[0].textContent == square[1].textContent &&
    square[0].textContent == square[2].textContent &&
    square[0].textContent !== "";
  let row2 =
    square[3].textContent == square[4].textContent &&
    square[3].textContent == square[5].textContent &&
    square[3].textContent !== "";
  let row3 =
    square[6].textContent == square[7].textContent &&
    square[6].textContent == square[8].textContent &&
    square[6].textContent !== "";
  if (row1 || row2 || row3) {
    gameOver = true;
  }
  if (row1) return (winner = square[0].textContent);
  if (row2) return (winner = square[3].textContent);
  if (row3) return (winner = square[6].textContent);
}

function diagonal() {
  let dia1 =
    square[0].textContent == square[4].textContent &&
    square[0].textContent == square[8].textContent &&
    square[0].textContent !== "";
  let dia2 =
    square[2].textContent == square[4].textContent &&
    square[2].textContent == square[6].textContent &&
    square[2].textContent !== "";

  if (dia1 || dia2) {
    gameOver = true;
  }
  if (dia1) return (winner = square[0].textContent);
  if (dia2) return (winner = square[2].textContent);
}

function draws(){
    const draw = [];
    square.forEach(part => draw.push(part.textContent))
    if(!draw.includes("")){
        player.textContent = " Draws !"
        square.forEach(part => part.style.pointerEvents = "none")
    }
}

startGame();
