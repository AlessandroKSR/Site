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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    }
];

var timer = document.getElementById("timer");

function startCronometro() {
    cronometro = setInterval(function() {
        tempoRestante--;

        
        timer.innerText = `Tempo Restante: ${tempoRestante}s`

        if (tempoRestante <= 0) {
            atualizando = true;
            closeDialog();
            clearInterval(cronometro);

            player.vidas--;
            tempoRestante = tempoLimite;

            // Verifica se o jogador perdeu o jogo
            if (player.vidas === 0) {
                fimJogo();
            } else {
                showDialog('Tempo esgotado! Vidas restantes: ' + player.vidas);
                
            }
        }
    }, 1000); // Atualiza a cada segundo
}


function showDialog(question, options) {
    // Restaura o tempo limite
    tempoRestante = tempoLimite;

    textoDialogo.innerHTML = question;

    atualizando =  false;
    // Limpa as opções existentes
    opcoes.innerHTML = "";
    
    timer.style.display = "none";

    // Adiciona as novas opções
    if(options){options.forEach(function(option, index) {
        
        timer.style.display = "block"
        var listItem = document.createElement('li');
        listItem.innerHTML = `<button onclick="checkAnswer(${index})">${option}</button>`;
        opcoes.appendChild(listItem);
    });
    }
    // Adiciona o botão de fechar
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'block';

    caixaDialogo.style.display = 'block';

    // Inicia o cronômetro
    
    // Desativa as teclas durante o diálogo
    teclas = {};
}


function closeDialog() {

    atualizando = true;
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'none';

    caixaDialogo.style.display = 'none';
    // Reativa as teclas após o diálogo
    teclas = {};

    // Verifica se o jogador ganhou ou perdeu o jogo
    if (player.vidas === 0 || player.respostas === 10) {
        fimJogo();
    }
}

function checkAnswer(index) {

    clearInterval(cronometro);  
    var interactingNPC 
    npcs.forEach(npc => {
        interactingNPC = npc
       
    })

    

    if (interactingNPC) {
        var selectedAnswer = interactingNPC.quiz.options[index];

        if (selectedAnswer === interactingNPC.quiz.correctAnswer) {
            

            // Incrementa respostas corretas
            player.respostas++;
            
            console.log('Respostas corretas:', player.respostas);

            interactingNPC.answered = true; // Marca o NPC como respondido

            // Verifica se o jogador ganhou o jogo
            if (player.respostas === 10) {
                fimJogo();
            } else {
                showDialog('Resposta correta!');
            }
        } else {
            // Decrementa vidas
            player.vidas--;

            console.log('Resposta incorreta. Vidas restantes:', player.vidas);

            // Verifica se o jogador perdeu o jogo
            if (player.vidas === 0) {
                fimJogo();
            } else {
                showDialog('Resposta incorreta! Vidas restantes: ' + player.vidas);
            }
        }
    }
    
}