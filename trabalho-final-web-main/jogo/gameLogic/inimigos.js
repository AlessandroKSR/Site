var enemies = [
    {
        x: 1300,
        y: 502,
        width: 32,
        height: 48,
        alive: true
    }
];

function drawEnemies() {
    ctx.fillStyle = "red";
    enemies.forEach(function(enemy) {
        if (enemy.alive) {
            ctx.fillRect(enemy.x - camera.x, enemy.y, enemy.width, enemy.height);
        }
    });


}

function checkEnemyCollision() {
    enemies.forEach(function(enemy) {
        if (checkCollision(player, enemy) && player.velocityY > 0 && player.y < enemy.y) {
            // O jogador está acima do inimigo e caindo, então mata o inimigo
            enemy.alive = false;
            player.velocityY = -player.jumpHeight; // Faz o jogador pular após matar o inimigo
        } else if (checkCollision(player, enemy) && enemy.alive) {
            // O jogador colidiu com um inimigo e o inimigo está vivo, então o jogador perde uma vida
            player.lives--;
            showDialog('Você colidiu com um inimigo! Vidas restantes: ' + player.lives);

            // Verifica se o jogador perdeu o jogo
            if (player.lives === 0) {
                endGame();
            }
        }
    });
}

function updateEnemies() {
    // Lógica do inimigo (pode ser expandida conforme necessário)
    enemies.forEach(function(enemy) {
        if (enemy.alive) {
            // Calcula a direção para o jogador
            var direction = player.x - enemy.x;

            // Move o inimigo em direção ao jogador com uma velocidade definida
            var enemySpeed = 2; // Ajuste conforme necessário
            if (direction > 0) {
                enemy.x += enemySpeed;
            } else {
                enemy.x -= enemySpeed;
            }
        }
    });
    
}

