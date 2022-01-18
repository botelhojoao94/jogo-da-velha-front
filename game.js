// Iniciar variaveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0; // 0 para primeiro jogador e 1 para segundo jogador
let symbols = ['X', 'O'];
var validPosition = true;
var gameOver = false;

function handleMove(position) {
    if (gameOver == false) {
        if (board[position] != '') {
            validPosition = false
        } else {
            validPosition = true
            board[position] = symbols[playerTime]
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    } else {
        window.location.reload();
    }
}

function winnerPlayer() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (i = 0; i < winStates.length; i++) {
        let firstPosition = winStates[i][0]
        let secondPosition = winStates[i][1]
        let thirdPosition = winStates[i][2]
        if (board[firstPosition] == board[secondPosition] &&
            board[firstPosition] == board[thirdPosition] &&
            board[firstPosition] != '') {
            gameOver = true;
            let info = document.getElementById("info")
            let restartBtn = document.getElementById("restart")
            if(board[firstPosition] == 'X'){
            info.innerText = "O jogador O venceu! Parabéns!"
        }
            else{
            info.innerText = "O jogador X venceu! Parabéns!"
            }
            info.style.color = "#77c897"
            restartBtn.style.display = "block"
        }
    }
    return false
}

function restart(){
    window.location.reload();
}