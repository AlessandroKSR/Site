var plataforma = [
    { x: -600, y: 600, width: 4900, height: 130 },
    { x: 4600 , y: 600, width: 5000, height: 130 },
    { x: 400, y: 450, width: 300, height: 20},
    { x: 2290, y: 450, width: 700, height: 20 },
    { x: 3000, y: 250, width: 400, height: 20 },
    { x: 3475, y: 150, width: 300, height: 20 },
    { x: 3850, y: 350, width: 150, height: 20 },
    { x: 4275, y: 150, width: 200, height: 20 },
    
];

var barreira = [
    { x: -200, y: 0, width: 1, height: 20000},
    { x: 6600, y: 0, width: 1, height: 20000}
];

var cano = [ 
    { x: 900, y: 480, width: 70, height: 120 },  
    { x: 1500, y: 480, width: 70, height: 120 }, 
    { x: 2100, y: 480, width: 70, height: 120},
    { x: 2356, y: 320, width: 70, height: 130},
    { x: 2856, y: 320, width: 70, height: 130},
    { x: 3700, y: 480, width: 70, height: 120 },
    { x: 4100, y: 250, width: 80, height: 350 },
    { x: 4750, y: 480, width: 70, height: 120 },
    { x: 5400, y: 480, width: 70, height: 120 },
    { x: 5900, y: 300, width: 80, height: 300 },
];



function desenho() {
    
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    drawEnemies();

    // Desenha o jogador
    ctx.drawImage(personagem, player.x - camera.x, player.y, player.width, player.height);
    
    // Desenha os NPCs
    npcs.forEach(function(npc) {
        ctx.drawImage(perguntas, npc.x - camera.x, npc.y, npc.width, npc.height);
    });

    // Desenha as plataformas
    ctx.fillStyle = "black";
    plataforma.forEach(function(platform) {
        ctx.fillRect(platform.x - camera.x, platform.y, platform.width, platform.height);
    });

    
    cano.forEach(function(cano) {
        ctx.drawImage(canoIMG, cano.x - camera.x, cano.y, cano.width, cano.height);
    });


    // Exibe vidas e respostas corretas
    ctx.font = "20px arial";
    ctx.fillStyle = "white";
    ctx.fillText("Vidas: " + player.lives, 20, 30);
    ctx.fillText("Respostas Corretas: " + player.correctAnswers, 20, 60);
}