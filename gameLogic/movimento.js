function checkCollision(objA, objB) {
    return (
        objA.x < objB.x + objB.width &&
        objA.x + objA.width > objB.x &&
        objA.y < objB.y + objB.height &&
        objA.y + objA.height > objB.y
    );
}

function update() {
    // Impede a atualização se o jogo tiver terminado
    if (player.gameOver || player.gameWon) {
        return;
    }
    checkEnemyCollision();

    updateEnemies();


    // Movimento do jogador
    if (keys['a'] || keys['A']) {
        player.x -= player.speed;
    }

    if (keys['d'] || keys['D']) {
        player.x += player.speed;
    }

    // Aplica a gravidade
    player.y += player.velocityY;
    player.velocityY += player.gravity;

    // Verifica se o jogador está no chão
    var onGround = false;
    platforms.forEach(function(platform) {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y < platform.y + platform.height
        ) {
            // Colisão com a plataforma
            player.y = platform.y - player.height;
            player.jumping = false;
            player.velocityY = 0;
            onGround = true;
        }
    });

    // Ajusta a posição do jogador se estiver no chão
    if (!onGround) {
        player.jumping = true;
    }

    // Pulo
    // Pulo
if ((keys['w'] || keys['W']) && !player.jumping && onGround) {
    player.velocityY = -player.jumpHeight;
    player.jumping = true;
}



    // Verifica interação com os NPCs
    npcs.forEach(function(npc) {
        // Calcula a distância entre o jogador e o NPC
        var distance = Math.sqrt(Math.pow((player.x + player.width / 2) - (npc.x + npc.width / 2), 2) +
                                Math.pow((player.y + player.height / 2) - (npc.y + npc.height / 2), 2));

        // Define um raio de interação (ajuste conforme necessário)
        var interactionRadius = 100;

        // Verifica se o jogador está dentro do raio de interação
        if (distance < interactionRadius) {
            // Verifica se a tecla Enter foi pressionada para interagir
            if (keys['Enter']) {
                showDialog(npc.quiz.question, npc.quiz.options);
            }
        }
    });

    // Atualiza a posição da câmera para seguir o jogador
    camera.x = player.x - canvas.width / 4;
}