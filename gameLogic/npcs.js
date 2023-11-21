let updating = true;

var tempoLimite = 20; 
var tempoRestante = tempoLimite;
var cronometro; 

var npcs = [
    {
        x: 530,
        y: 402,
        width: 32,
        height: 48,
        quiz: {
            question: "Onde ocorre a fertilização no sistema reprodutor feminino?",
            options: ["Útero", "Ovários", "Trompas de Falópio", "Vagina"],
            correctAnswer: "Trompas de Falópio"
        }
    },
    
    {
        x: 1430,
        y: 552,
        width: 32,
        height: 48,
        quiz: {
            question: "O que acontece durante o processo de ovulação?",
            options: ["Liberação de um óvulo pelos ovários", "Fertilização do óvulo pelo espermatozoide", "Implantação do embrião no útero", "Menstruação"],
            correctAnswer: "Liberação de um óvulo pelos ovários"
        }
    },
    {
        x: 1900,
        y: 552,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },
    {
        x: 2650,
        y: 400,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },

    {
        x: 3150,
        y: 200,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },
    {
        x: 3300,
        y: 552,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },
    {
        x: 3880,
        y: 300,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },
    {
        x: 4350,
        y: 100,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },
    {
        x: 5275,
        y: 552,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    },

    {
        x: 5800,
        y: 552,
        width: 32,
        height: 48,
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
            updating = true;
            closeDialog();
            clearInterval(cronometro);

            player.lives--;
            tempoRestante = tempoLimite;

            // Verifica se o jogador perdeu o jogo
            if (player.lives === 0) {
                endGame();
            } else {
                showDialog('Tempo esgotado! Vidas restantes: ' + player.lives);
                
            }
        }
    }, 1000); // Atualiza a cada segundo
}


function showDialog(question, options) {
    // Restaura o tempo limite
    tempoRestante = tempoLimite;

    dialogText.innerHTML = question;

    updating =  false;
    // Limpa as opções existentes
    optionsList.innerHTML = "";
    
    timer.style.display = "none";

    // Adiciona as novas opções
    if(options){options.forEach(function(option, index) {
        
        timer.style.display = "block"
        var listItem = document.createElement('li');
        listItem.innerHTML = `<button onclick="checkAnswer(${index})">${option}</button>`;
        optionsList.appendChild(listItem);
    });
    }
    // Adiciona o botão de fechar
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'block';

    dialogBox.style.display = 'block';

    // Inicia o cronômetro
    
    // Desativa as teclas durante o diálogo
    keys = {};
}


function closeDialog() {

    updating = true;
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'none';

    dialogBox.style.display = 'none';
    // Reativa as teclas após o diálogo
    keys = {};

    // Verifica se o jogador ganhou ou perdeu o jogo
    if (player.lives === 0 || player.correctAnswers === 10) {
        endGame();
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
            console.log('Resposta correta!');

            // Incrementa respostas corretas
            player.correctAnswers++;
            
            console.log('Respostas corretas:', player.correctAnswers);

            interactingNPC.answered = true; // Marca o NPC como respondido

            // Verifica se o jogador ganhou o jogo
            if (player.correctAnswers === 10) {
                endGame();
            } else {
                showDialog('Resposta correta!');
            }
        } else {
            // Decrementa vidas
            player.lives--;

            console.log('Resposta incorreta. Vidas restantes:', player.lives);

            // Verifica se o jogador perdeu o jogo
            if (player.lives === 0) {
                endGame();
            } else {
                showDialog('Resposta incorreta! Vidas restantes: ' + player.lives);
            }
        }
    }
    
}