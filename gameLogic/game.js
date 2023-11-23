var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var backgroundImage = new Image();
var personagem = new Image();
var npcsImg = new Image();
var inimigos = new Image();
var canoImg = new Image();

backgroundImage.src = "imagens/fundo2.png";
personagem.src = "imagens/ovulo.png";
npcsImg.src = "imagens/eduardo_costa.png";
inimigos.src = "imagens/diu.png";
canoImg.src = "imagens/pipe.png";

var player = {
    x: 0,
    y: 550,
    width: 50,
    height: 50,
    velocidade: 5,
    alturaPulo: 15,
    gravidade: 1,
    pulando: false,
    velocidadeY: 0,
    vidas: 3,
    respostas: 0,
    gameOver: false,
    ganhou: false,
    
};

var caixaDialogo = document.getElementById('dialogBox');
var textoDialogo = document.getElementById('dialogText');
var opcoes = document.getElementById('optionsList');

var teclas = {};


var camera = {
    x: 0,
    y: 0
};


function fimJogo() {

    player.gameOver = true;

    // Mostra a mensagem final
    var msgFinal = player.respostas === 10 ? 'Parabéns! Você ganhou o jogo!' : 'Você perdeu o jogo!';
    if(player.respostas == 10)
    {
        document.getElementById('audioPlayer').play();
    }
    
    
    mostrarDialogo(msgFinal);

    // Adiciona o botão de retornar ao menu
    var returnToMenuButton = document.createElement('button');
    var jogarNov = document.createElement('button')
    jogarNov.innerText = 'Jogar Novamente'
    jogarNov.onclick = function(){
        location.reload()
    }
    returnToMenuButton.innerText = 'Retornar ao Menu';
    returnToMenuButton.onclick = function() {
        window.location.href = 'index.html';
    };
    opcoes.appendChild(returnToMenuButton);
    opcoes.appendChild(jogarNov);
   
}



function jogoLoop() {
    if (atualizando){
        atualiza();}
    desenho();
    requestAnimationFrame(jogoLoop);
    console.log(player.y);
}

window.addEventListener('keydown', function(e) {
    teclas[e.key] = true;
});

window.addEventListener('keyup', function(e) {
    teclas[e.key] = false;
});

jogoLoop();
