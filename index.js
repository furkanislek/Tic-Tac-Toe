const square = document.querySelectorAll(".part");
const player = document.getElementById("player");
const err = document.getElementById("error");
let whoPlayer = "X";

function startGame(){
    player.textContent = `${whoPlayer}'s Turn`;

    square.forEach(part => part.addEventListener("click", function(){
        selectSquare(part)
    }))
}

function selectSquare(part){
    part.textContent = whoPlayer;
}














startGame()