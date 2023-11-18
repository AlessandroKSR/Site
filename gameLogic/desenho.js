var platforms = [
    { x: -600, y: 550, width: 200000, height: 700 }, // Largura do chão aumentada
    { x: 600, y: 400, width: 200, height: 20 },
    { x: 50, y: 250, width: 200, height: 20 },
    { x: 700, y: 220, width: 100, height: 20 },
    { x: 1000, y: 350, width: 200, height: 20 },
    { x: 1200, y: 200, width: 200, height: 20 },
    { x: 1600, y: 450, width: 200, height: 20 },
    { x: 1800, y: 300, width: 200, height: 20 }
];

function draw() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);


    drawEnemies();

    // Desenha o jogador
    ctx.fillStyle = "pink"
    ctx.fillRect(player.x - camera.x, player.y, player.width, player.height);

    // Desenha os NPCs
    ctx.fillStyle = "blue";
    npcs.forEach(function(npc) {
        ctx.fillRect(npc.x - camera.x, npc.y, npc.width, npc.height);
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