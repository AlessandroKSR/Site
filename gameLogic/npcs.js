let updating = true;

var npcs = [
    {
        x: 300,
        y: 502,
        width: 32,
        height: 48,
        quiz: {
            question: "Onde ocorre a fertilização no sistema reprodutor feminino?",
            options: ["Útero", "Ovários", "Trompas de Falópio", "Vagina"],
            correctAnswer: "Trompas de Falópio"
        }
    },
    {
        x: 900,
        y: 502,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual hormônio é responsável pelo desenvolvimento dos caracteres sexuais secundários femininos?",
            options: ["Testosterona", "Estrogênio", "Progesterona", "Prolactina"],
            correctAnswer: "Estrogênio"
        }
    },
    {
        x: 1500,
        y: 502,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual é a função principal do útero no sistema reprodutor feminino?",
            options: ["Produzir óvulos", "Armazenar espermatozoides", "Desenvolver o feto durante a gestação", "Produzir hormônios sexuais"],
            correctAnswer: "Desenvolver o feto durante a gestação"
        }
    },
    {
        x: 2100,
        y: 502,
        width: 32,
        height: 48,
        quiz: {
            question: "O que acontece durante o processo de ovulação?",
            options: ["Liberação de um óvulo pelos ovários", "Fertilização do óvulo pelo espermatozoide", "Implantação do embrião no útero", "Menstruação"],
            correctAnswer: "Liberação de um óvulo pelos ovários"
        }
    },
    {
        x: 2700,
        y: 502,
        width: 32,
        height: 48,
        quiz: {
            question: "Qual o papel da progesterona no ciclo menstrual?",
            options: ["Estimular o desenvolvimento dos órgãos sexuais femininos", "Induzir a ovulação", "Preparar o revestimento do útero para a gravidez", "Inibir a produção de óvulos pelos ovários"],
            correctAnswer: "Preparar o revestimento do útero para a gravidez"
        }
    }
];

function showDialog(question, options) {
    dialogText.innerHTML = question;

    updating =  false;
    // Limpa as opções existentes
    optionsList.innerHTML = "";

    // Adiciona as novas opções
    options.forEach(function(option, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<button onclick="checkAnswer(${index})">${option}</button>`;
        optionsList.appendChild(listItem);
    });

    // Adiciona o botão de fechar
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'block';

    dialogBox.style.display = 'block';
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
    if (player.lives === 0 || player.correctAnswers === 3) {
        endGame();
    }
}

function checkAnswer(index) {
    var interactingNPC 
    npcs.forEach(npc => {
        interactingNPC = npc
        if (checkCollision(player, npc)) {
            
        }
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
            if (player.correctAnswers === 3) {
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