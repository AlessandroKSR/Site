var platforms = [
    { x: -10000, y: 550, width: 200000, height: 700 }, // Largura do chão aumentada
    { x: 600, y: 400, width: 200, height: 20 },
    { x: 50, y: 250, width: 200, height: 20 },
    { x: 700, y: 220, width: 100, height: 20 },
    { x: 1000, y: 350, width: 200, height: 20 },
    { x: 1200, y: 200, width: 200, height: 20 },
    { x: 1600, y: 440, width: 230, height: 20 },
    { x: 2000, y: 350, width: 250, height: 20 },
    { x: 2250, y: 200, width: 150, height: 20 },
    { x: 2475, y: 300, width: 150, height: 20 },
    { x: 2630, y: 400, width: 75, height: 20 },
    { x: 2850, y: 250, width: 200, height: 20 },
    { x: 3060, y: 350, width: 200, height: 20 },
    { x: 3250, y: 200, width: 200, height: 20 },
    { x: 3475, y: 100, width: 75, height: 20 },
    { x: 3605, y: 230, width: 200, height: 20 },
    { x: 3825, y: 100, width: 100, height: 20 },
    { x: 3850, y: 350, width: 100, height: 20 },
    { x: 4050, y: 200, width: 200, height: 20 },
    { x: 4275, y: 100, width: 200, height: 20 },
    { x: 4500, y: 400, width: 200, height: 20 }
];
var barreira = [
    { x: -600, y: 0, width: 1, height: 2000000},
    { x: 5000, y: 0, width: 1, height: 2000000}
];

function draw() {
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
    platforms.forEach(function(platform) {
        ctx.fillRect(platform.x - camera.x, platform.y, platform.width, platform.height);
    });

    // Exibe vidas e respostas corretas
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Vidas: " + player.lives, 20, 30);
    ctx.fillText("Respostas Corretas: " + player.correctAnswers, 20, 60);
}