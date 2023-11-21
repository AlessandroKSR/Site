function colisao(objA, objB) {
    return (
        objA.x < objB.x + objB.width &&
        objA.x + objA.width > objB.x &&
        objA.y < objB.y + objB.height &&
        objA.y + objA.height > objB.y
    );
}





function atualiza() {
    // Impede a atualização se o jogo tiver terminado
    if (player.gameOver || player.gameWon) {
        return;
    }
    checkEnemyCollision();

    updateEnemies();

    if (keys['a'] || keys['A']) {
        player.x -= player.speed;
    }

    if (keys['d'] || keys['D']) {
        player.x += player.speed;
    }

   for(var i = 0; i < cano.length; i++){
    
        
        if(colisao(player, cano[i]) && player.y <  cano[i].y){
          
          player.velocityY = 0;
          player.y = cano[i].y - player.height;
          player.jumping = false;
          noChao = true;

          if ((keys['w'] || keys['W']) && !player.jumping && noChao) {
            player.velocityY = -player.jumpHeight;
            player.jumping = true;
            noChao = false;
        }
          break;

        }else{
            player.velocityY += player.gravity/(cano.length + npcs.length) ;
           
        }
        if(colisao(player, cano[i]) && player.x < cano[i].x + cano[i].width * 0.5){
            player.x = cano[i].x - player.height;
        }

        if(colisao(player, cano[i]) && player.x > cano[i].x + cano[i].width * 0.5){
            player.x = cano[i].x + cano[i].width
        }
   };

   for(var i = 0; i < npcs.length; i++){
    
        
    if(colisao(player, npcs[i]) && player.y <  npcs[i].y){
      
      player.velocityY = 0;
      player.y = npcs[i].y - player.height;
      player.jumping = false;
      noChao = true;

      if ((keys['w'] || keys['W']) && !player.jumping && noChao) {
        player.velocityY = -player.jumpHeight;
        player.jumping = true;
        noChao = false;
    }
      break;

    }else{
        player.velocityY += player.gravity/(cano.length + npcs.length);
       
    }
    if(colisao(player, npcs[i]) && player.x < npcs[i].x + npcs[i].width * 0.5){
        player.x = npcs[i].x - player.height;
    }

    if(colisao(player, npcs[i]) && player.x > npcs[i].x + npcs[i].width * 0.5){
        player.x = npcs[i].x + npcs[i].width
    }
};
   
    
   
    
player.y += player.velocityY;
 
    
    // Verifica se o jogador está no chão
    var noChao = false;
    plataforma.forEach(function(platform) {
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
            noChao = true;
        }
    });
        barreira.forEach(function(barreira) {
            if (
                player.x < barreira.x + barreira.width &&
                player.x + player.width > barreira.x &&
                player.y + player.height > barreira.y &&
                player.y < barreira.y + barreira.height
            ) {
                if(barreira.x == -200)
                {
                    player.velocityY = 0;
                    player.x = player.x + 5;
                }
                else
                {
                    player.velocityY = 0;
                    player.x = player.x - 5;
                }
            }
    });

    
    if (!noChao) {
        player.jumping = true;
    }

    // Pulo
    // Pulo
if ((keys['w'] || keys['W']) && !player.jumping && noChao) {
    player.velocityY = -player.jumpHeight;
    player.jumping = true;
}



    // Verifica interação com os NPCs
    npcs.forEach(function(npc) {
        // Calcula a distância entre o jogador e o NPC
        var distancia = Math.sqrt(Math.pow((player.x + player.width / 2) - (npc.x + npc.width / 2), 2) +
                                Math.pow((player.y + player.height / 2) - (npc.y + npc.height / 2), 2));

        // Define um raio de interação (ajuste conforme necessário)
        var raio = 75;

        // Verifica se o jogador está dentro do raio de interação
        if (distancia < raio) {
            // Verifica se a tecla Enter foi pressionada para interagir
            if (keys['Enter']) {
                showDialog(npc.quiz.question, npc.quiz.options);
                startCronometro(cronometro);
            }
        }
    });

    // Atualiza a posição da câmera para seguir o jogador
    camera.x = player.x - canvas.width / 4;


}