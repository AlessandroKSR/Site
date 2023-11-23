function colisao(objA, objB) {  //verifica a colisao entre dois objetos
    return (
        objA.x < objB.x + objB.width &&
        objA.x + objA.width > objB.x &&
        objA.y < objB.y + objB.height &&  
        objA.y + objA.height > objB.y
    );
}



function atualiza() { //atualiza as posiçoes e as funcoes dos objetos utilizados no projeto
    

    colisaoInimigo();

    atualizaInimigo();

    if (teclas['a'] || teclas['A']) {  // faz o player andar para tras ao pressionar a tecla A
        player.x -= player.velocidade;
    }

    if (teclas['d'] || teclas['D']) { // faz o player andar para tras ao pressionar a tecla D
        player.x += player.velocidade;
    }

   for(var i = 0; i < cano.length; i++){ //colisao do playet com o cano
    
        
        if(colisao(player, cano[i]) && player.y <  cano[i].y){
          
          player.velocidadeY = 0;
          player.y = cano[i].y - player.height;
          player.pulando = false;
          noChao = true;

          if ((teclas['w'] || teclas['W']) && !player.pulando && noChao) {
            player.velocidadeY = -player.alturaPulo;
            player.pulando = true;
            noChao = false;
        }
          break;

        }else{
            player.velocidadeY += player.gravidade/(cano.length + npcs.length) ;
           
        }
        if(colisao(player, cano[i]) && player.x < cano[i].x + cano[i].width * 0.5){
            player.x = cano[i].x - player.height;
        }

        if(colisao(player, cano[i]) && player.x > cano[i].x + cano[i].width * 0.5){
            player.x = cano[i].x + cano[i].width
        }
   };

   for(var i = 0; i < npcs.length; i++){ //colisao do player com os npcs
    
        
    if(colisao(player, npcs[i]) && player.y <  npcs[i].y){
      
      player.velocidadeY = 0;
      player.y = npcs[i].y - player.height;
      player.pulando = false;
      noChao = true;

      if ((teclas['w'] || teclas['W']) && !player.pulando && noChao) {
        player.velocidadeY = -player.alturaPulo;
        player.pulando = true;
        noChao = false;
    }
      break;

    }else{
        player.velocidadeY += player.gravidade/(cano.length + npcs.length);
       
    }
};
   
    
   
    
player.y += player.velocidadeY;  
 
    
    
    var noChao = false;
    plataforma.forEach(function(plataforma) {  // verifica a colisao do player com a plataforma
        if (
            player.x < plataforma.x + plataforma.width &&
            player.x + player.width > plataforma.x &&
            player.y + player.height > plataforma.y &&
            player.y < plataforma.y + plataforma.height
        ) {
            
            player.y = plataforma.y - player.height;
            player.pulando = false;
            player.velocidadeY = 0;
            noChao = true;
        }
    });
        barreira.forEach(function(barreira) { // verifica a colisao do player com a barreira
            if (
                player.x < barreira.x + barreira.width &&
                player.x + player.width > barreira.x &&
                player.y + player.height > barreira.y &&
                player.y < barreira.y + barreira.height
            ) {
                if(barreira.x == -200)
                {
                    player.velocidadeY = 0;
                    player.x = player.x + 5;
                }
                else
                {
                    player.velocidadeY = 0;
                    player.x = player.x - 5;
                }
            }
    });

    
    if (!noChao) {
        player.pulando = true;
    }

    
if ((teclas['w'] || teclas['W']) && !player.pulando && noChao) {  // faz o player pular ao pressionar W
    player.velocidadeY = -player.alturaPulo;
    player.pulando = true;
}



    
    npcs.forEach(function(npc) {
        
        interagindo_NPC = npc
        
        var distancia = Math.sqrt(Math.pow((player.x + player.width / 2) - (npc.x + npc.width / 2), 2) +
                                Math.pow((player.y + player.height / 2) - (npc.y + npc.height / 2), 2));
                                // calcula a distancia do player pro NPC utilizando teorema de Pitagoras
        
        var raio = 75;

        
        if (distancia < raio) {
            
            if (teclas['Enter'] && interagindo_NPC.respondido == false) { // faz o player interagir com o npc ao clicar enter
                mostrarDialogo(npc.quiz.question, npc.quiz.options);
                startCronometro(cronometro);
                interagindo_NPC.respondido = true;
                
            }
        }
    });

    
    camera.x = player.x - canvas.width / 4; // ajusta a posiçao da camera


}