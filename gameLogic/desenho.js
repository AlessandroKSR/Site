var plataforma = [
    { x: -600, y: 600, width: 2000, height: 130 },
    { x: 1400 , y: 600, width: 2000, height: 130 },
    { x: 2500 , y: 600, width: 1800, height: 130 },
    { x: 4600 , y: 600, width: 2000, height: 130 },
    { x: 6500 , y: 600, width: 2000, height: 130 },
    { x: 400, y: 450, width: 300, height: 20},
    { x: 2290, y: 450, width: 700, height: 20 },
    { x: 3000, y: 250, width: 400, height: 20 },
    { x: 3475, y: 150, width: 300, height: 20 },
    { x: 3850, y: 350, width: 150, height: 20 },
    { x: 4275, y: 150, width: 200, height: 20 },
    
];

var barreira = [
    { x: -200, y: 0, width: 1, height: 200000000},
    { x: 6600, y: 0, width: 1, height: 200000000}
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

    enemies.forEach(function(enemy) {
        
        if (enemy.vivo) {
            ctx.drawImage(inimigos, enemy.x - camera.x, enemy.y, enemy.width, enemy.height);
        }
    });

    // Desenha o jogador
    ctx.drawImage(personagem, player.x - camera.x, player.y, player.width, player.height);
    
    // Desenha os NPCs
    npcs.forEach(function(npc) {
        ctx.drawImage(npcsImg, npc.x - camera.x, npc.y, npc.width, npc.height);
    });

    // Desenha as plataformas
    plataforma.forEach(function(platform) {
        ctx.drawImage(chao, platform.x - camera.x, platform.y, platform.width, platform.height);
    });

    
    cano.forEach(function(cano) {
        ctx.drawImage(canoImg, cano.x - camera.x, cano.y, cano.width, cano.height);
    });


    // Exibe vidas e respostas corretas
    ctx.font = "20px arial";
    ctx.fillStyle = "white";
    ctx.fillText("Vidas: " + player.vidas, 20, 30);
    ctx.fillText("Respostas Corretas: " + player.respostas, 20, 60);
}