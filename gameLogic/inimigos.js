var enemies = [
    { x: 800, y: 520, width: 80, height: 80, alive: true, speed: 2},
    { x: 1195, y: 520, width: 80, height: 80, alive: true, speed: 2},
    { x: 1595, y: 520, width: 80, height: 80, alive: true, speed: 2},
    { x: 2650, y: 370, width: 80, height: 80, alive: true, speed: 2},
    { x: 2300, y: 520, width: 80, height: 80, alive: true, speed: 2},
    { x: 3500, y: 520, width: 80, height: 80, alive: true, speed: 2},
    { x: 5300, y: 520, width: 80, height: 80, alive: true, speed: 2},
    { x: 5800, y: 520, width: 80, height: 80, alive: true, speed: 2},
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
        if (colisao(player, enemy) && player.velocityY > 0 && player.y < enemy.y) {
           
            enemy.y = -500000
            enemy.alive = false;
            player.velocityY = -player.jumpHeight; // Faz o jogador pular após matar o inimigo
        } else if (colisao(player, enemy) && enemy.alive) {
            
            player.lives = 0;
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
    enemies.forEach(enemy=>
        { for(var i = 0; i < cano.length; i++){
            if(colisao(enemy, cano[i]) && enemy.x < cano[i].x + cano[i].width * 0.5){
                enemy.speed = - enemy.speed;
            }
            if(colisao(enemy, cano[i]) && enemy.x > cano[i].x + cano[i].width * 0.5){
                enemy.speed = - enemy.speed;
            }
            
        }

        if(enemy.alive){
            enemy.x += enemy.speed
        }
    })
}
    


