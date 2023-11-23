let atualizando = true;

var tempoLimite = 20; 
var tempoRestante = tempoLimite;
var cronometro; 

var npcs = [
    {
        x: 530,
        y: 352,
        width: 59,
        height: 100,
        quiz: {
            question: "Onde ocorre a fertilização no sistema reprodutor feminino?",
            options: ["Útero", "Ovários", "Trompas de Falópio", "Vagina"],
            correctAnswer: "Trompas de Falópio"
        }, 
        respondido: false
    },
    
    {
        x: 1430,
        y: 502,
        width: 59,
        height: 100,
        quiz: {
            question: "O que acontece durante o processo de ovulação?",
            options: ["Liberação de um óvulo pelos ovários", "Fertilização do óvulo pelo espermatozoide", "Implantação do embrião no útero", "Menstruação"],
            correctAnswer: "Liberação de um óvulo pelos ovários"
        }, 
        respondido: false
    },
    {
        x: 1900,
        y: 502,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },
    {
        x: 2650,
        y: 350,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },

    {
        x: 3150,
        y: 150,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },
    {
        x: 3300,
        y: 502,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },
    {
        x: 3880,
        y: 250,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },
    {
        x: 4350,
        y: 50,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },
    {
        x: 5275,
        y: 502,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    },

    {
        x: 5800,
        y: 502,
        width: 59,
        height: 100,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }, 
        respondido: false
    }
];

var timer = document.getElementById("timer");

function startCronometro() { // gera o cronomentro de cada pergunta

    timer.innerText = `Tempo Restante: 20s`
    cronometro = setInterval(function() {
        tempoRestante--;

        
        timer.innerText = `Tempo Restante: ${tempoRestante}s`

        if (tempoRestante <= 0) {
            atualizando = true;
            fecharDialogo();
            clearInterval(cronometro);

            player.vidas--;
            tempoRestante = tempoLimite;

            // Verifica se o jogador perdeu o jogo
            if (player.vidas === 0) {
                fimJogo();
            } else {
                mostrarDialogo('Tempo esgotado! Vidas restantes: ' + player.vidas);
                
            }
        }
    }, 1000); 
}


function mostrarDialogo(question, options) { // abre a caixa de dialogo
    // Restaura o tempo limite
    tempoRestante = tempoLimite;

    textoDialogo.innerHTML = question;

    atualizando =  false; // faz com que o jogo pare ao interagir com o npc
    
    opcoes.innerHTML = "";
    
    timer.style.display = "none";

    // adiciona as novas opções
    if(options){options.forEach(function(option, index) {
        
        timer.style.display = "block"
        var listItem = document.createElement('li');
        listItem.innerHTML = `<button onclick="checarResposta(${index})">${option}</button>`;
        opcoes.appendChild(listItem);
    });
    }
    // adiciona o botão de fechar
    var botaoFechar = document.getElementById('closeButton');
    botaoFechar.style.display = 'block';

    caixaDialogo.style.display = 'block';

    
    // desativa as teclas durante o diálogo
    teclas = {};
}


function fecharDialogo() { //fecha a caixa de dialogo

    atualizando = true;
    var botaoFechar = document.getElementById('closeButton');
    botaoFechar.style.display = 'none';

    clearInterval(cronometro);

    caixaDialogo.style.display = 'none';
    
    teclas = {};

    
    if (player.vidas === 0 || player.respostas === 10) { // verifica se o jogador ganhou ou perdeu o jogo
        fimJogo();
    }
}

function checarResposta(index) { //verifica se o jogador respondeu a pergunta do npc 

    clearInterval(cronometro);  
    var interagindo_NPC 
    npcs.forEach(npc => {
        interagindo_NPC = npc
       
    })

    

    if (interagindo_NPC) {
        var respostaSelecionada = interagindo_NPC.quiz.options[index];

        if (respostaSelecionada === interagindo_NPC.quiz.correctAnswer) {
            

            
            player.respostas++;
            
            console.log('Respostas corretas:', player.respostas);

            interagindo_NPC.answered = true; // Marca o NPC como respondido

            // Verifica se o jogador ganhou o jogo
            if (player.respostas === 10) {
                fimJogo();
            } else {
                mostrarDialogo('Resposta correta!');
            }
        } else {
            // Decrementa vidas
            player.vidas--;

            console.log('Resposta incorreta. Vidas restantes:', player.vidas);

            // Verifica se o jogador perdeu o jogo
            if (player.vidas === 0) {
                fimJogo();
            } else {
                mostrarDialogo('Resposta incorreta! Vidas restantes: ' + player.vidas);
            }
        }
    }
    
}