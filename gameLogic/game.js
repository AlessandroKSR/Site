var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var backgroundImage = new Image();
backgroundImage.src = "imagens/fundo.png";

var player = {
    x: 50,
    y: 50,
    width: 32,
    height: 48,
    speed: 5,
    jumpHeight: 15,
    gravity: 1,
    jumping: false,
    velocityY: 0,
    lives: 3,
    correctAnswers: 0,
    gameOver: false,
    gameWon: false
};

var dialogBox = document.getElementById('dialogBox');
var dialogText = document.getElementById('dialogText');
var optionsList = document.getElementById('optionsList');

var keys = {};


var camera = {
    x: 0,
    y: 0
};

function endGame() {
    player.gameOver = true;

    // Mostra a mensagem final
    var endMessage = player.correctAnswers === 3 ? 'Parabéns! Você ganhou o jogo!' : 'Você perdeu o jogo!';
    showDialog(endMessage);

    // Adiciona o botão de retornar ao menu
    var returnToMenuButton = document.createElement('button');
    returnToMenuButton.innerText = 'Retornar ao Menu';
    returnToMenuButton.onclick = function() {
        window.location.href = 'menu.html';
    };
    optionsList.appendChild(returnToMenuButton);

    // ... (seu código existente)
}



function gameLoop() {
    if (updating){
        update();}
    draw();
    requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

window.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});


// Inicializa o jogo
gameLoop();