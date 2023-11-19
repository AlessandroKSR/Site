var enemies = [
    { x: 1000, y: 470, width: 80, height: 80, alive: true},
    { x: 10000, y: 470, width: 80, height: 80, alive: true},
    { x: 20000, y: 470, width: 80, height: 80, alive: true},
    { x: 30000, y: 470, width: 80, height: 80, alive: true},
    { x: 40000, y: 470, width: 80, height: 80, alive: true},
    { x: 50000, y: 470, width: 80, height: 80, alive: true},
];

function drawEnemies() {

    enemies.forEach(function(enemy) {
        
        if (enemy.alive) {
            ctx.drawImage(inimigos, enemy.x - camera.x, enemy.y, enemy.width, enemy.height);
        }
    });


}

function checkEnemyCollision() {
    enemies.forEach(function(enemy) {
        if (checkCollision(player, enemy) && player.velocityY > 0 && player.y < enemy.y) {
            // O jogador está acima do inimigo e caindo, então mata o inimigo
            enemy.y = -500000
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
           
            var direction = -1

            
            cano.forEach(function(cano) {
                    if (
                        enemies.x < enemies.x + cano.width &&
                        enemies.x + enemies.width > cano.x &&
                        enemies.y + enemies.height > cano.y &&
                        enemies.y < cano.y + cano.height
                    ) {
                        direction = -direction;
                    }   
            });
            var enemySpeed = 2; // Ajuste conforme necessário
            if (direction > 0) {
                enemy.x += enemySpeed;
            } else {
                enemy.x -= enemySpeed;
            }
        }
    });
    
}

