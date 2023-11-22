var enemies = [
    { x: 800, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 1195, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 1595, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 2650, y: 370, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 2300, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 3500, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 5300, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
    { x: 5800, y: 520, width: 80, height: 80, vivo: true, velocidadeInimigo: 2},
];




function colisaoInimigo(){
    if (player.gameOver || player.ganhou) {
        return;
    }

    if(player.y > 1000)
    {
        fimJogo();
    }
    
    enemies.forEach(function(enemy) {
        if (colisao(player, enemy) && player.velocidade > 0 && player.y < enemy.y) {
           
            enemy.y = -500000
            enemy.vivo = false;
            
            player.velocidadeY = -player.alturaPulo;
            player.pulando = true;
            
        } else if (colisao(player, enemy) && enemy.vivo) {
            
            player.vidas = 0;
            
            // Verifica se o jogador perdeu o jogo
            if (player.vidas === 0) {
                
                fimJogo();
            }
        }
    });
}

function atualizaInimigo() {
    // Lógica do inimigo (pode ser expandida conforme necessário)
    enemies.forEach(enemy=>
        { for(var i = 0; i < cano.length; i++){
            if(colisao(enemy, cano[i]) && enemy.x < cano[i].x + cano[i].width * 0.5){
                enemy.velocidadeInimigo = - enemy.velocidadeInimigo;
            }
            if(colisao(enemy, cano[i]) && enemy.x > cano[i].x + cano[i].width * 0.5){
                enemy.velocidadeInimigo = - enemy.velocidadeInimigo;
            }
            
        }

        if(enemy.vivo){
            enemy.x += enemy.velocidadeInimigo
        }
    })
}
    


