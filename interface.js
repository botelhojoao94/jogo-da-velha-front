let info = document.getElementById("info")

function handleClick(position) {

    handleMove(position.id);
    if (validPosition) {
        updateSquares(position)
        winnerPlayer()
    }
    else {
        info.innerText = "Selecione outra posição!"
        info.style.color = "#ff4040"
    }
}

function updateSquares(position) {

    if (symbols[playerTime] == 'X'){
        position.innerHTML = `<div class="player-x"></div>`
        info.innerText = "É a vez do jogador O"
    }
    else{
        position.innerHTML = `<div class="player-o"></div>`
        info.innerText = "É a vez do jogador X"
    }
}