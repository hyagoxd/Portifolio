document.addEventListener('DOMContentLoaded', function() {
    const quizData = {
        title: "Ecologia do Vale",
        description: "Teste seus conhecimentos sobre a fauna e flora da região",
        questions: [
            {
                question: "Qual é a principal formação vegetal do Vale do Ribeira?",
                options: [
                    "Mata Atlântica",
                    "Cerrado",
                    "Caatinga",
                    "Pantanal"
                ],
                answer: 0,
                feedback: "Correto! O Vale do Ribeira está localizado no bioma Mata Atlântica, um dos mais biodiversos do mundo."
            },
            {
                question: "Qual desses animais é símbolo da região do Vale do Ribeira?",
                options: [
                    "Onça-pintada",
                    "Mico-leão-dourado",
                    "Papagaio-de-cara-roxa",
                    "Tatu-bola"
                ],
                answer: 2,
                feedback: "Exato! O papagaio-de-cara-roxa é endêmico da região e está ameaçado de extinção."
            },
            {
                question: "Qual é o principal rio que dá nome ao Vale do Ribeira?",
                options: [
                    "Rio Ribeira de Iguape",
                    "Rio Paraná",
                    "Rio Tietê",
                    "Rio Doce"
                ],
                answer: 0,
                feedback: "Isso mesmo! O Rio Ribeira de Iguape percorre 470 km desde sua nascente em Apiaí até o oceano."
            },
            {
                question: "Quantas espécies de aves podem ser encontradas no Vale do Ribeira?",
                options: [
                    "Mais de 350 espécies",
                    "Cerca de 150 espécies",
                    "Menos de 50 espécies",
                    "Aproximadamente 250 espécies"
                ],
                answer: 0,
                feedback: "Correto! A região abriga incríveis 350+ espécies de aves, muitas endêmicas."
            },
            {
                question: "Qual é a importância das cavernas do Vale do Ribeira?",
                options: [
                    "São as mais profundas do mundo",
                    "Abrigam ecossistemas únicos",
                    "São importantes para o turismo",
                    "Todas as alternativas anteriores"
                ],
                answer: 3,
                feedback: "Perfeito! As cavernas como a do Diabo são importantes por todos esses aspectos."
            },
            {
                question: "Qual atividade econômica tradicional é característica do Vale do Ribeira?",
                options: [
                    "Cultivo de banana",
                    "Extração de petróleo",
                    "Produção de vinho",
                    "Pecuária intensiva"
                ],
                answer: 0,
                feedback: "Certo! O Vale é um dos maiores produtores de banana do país, com técnicas tradicionais."
            },
            {
                question: "O que torna o solo do Vale do Ribeira especial para a agricultura?",
                options: [
                    "Sua origem vulcânica",
                    "Alta concentração de nutrientes",
                    "Sua coloração avermelhada",
                    "Profundidade e fertilidade natural"
                ],
                answer: 1,
                feedback: "Exato! O solo é rico em nutrientes devido à decomposição da matéria orgânica da floresta."
            },
            {
                question: "Qual é o principal predador natural do Vale do Ribeira?",
                options: [
                    "Onça-pintada",
                    "Jaguatirica",
                    "Gavião-real",
                    "Suçuarana"
                ],
                answer: 0,
                feedback: "Correto! A onça-pintada é o maior felino das Américas e importante para o equilíbrio ecológico."
            },
            {
                question: "Qual unidade de conservação protege parte do Vale do Ribeira?",
                options: [
                    "Parque Estadual Intervales",
                    "Parque Nacional do Iguaçu",
                    "Reserva Biológica de Poço das Antas",
                    "Parque Nacional da Serra dos Órgãos"
                ],
                answer: 0,
                feedback: "Isso mesmo! Intervales é uma das principais unidades de conservação da região."
            },
            {
                question: "Qual é a maior ameaça à biodiversidade do Vale do Ribeira?",
                options: [
                    "Desmatamento ilegal",
                    "Caça predatória",
                    "Expansão urbana",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Infelizmente todas essas ameaças impactam a rica biodiversidade local."
            }
        ]
    };

    // Elementos do DOM
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackText = document.getElementById('feedback-text');
    const nextButton = document.getElementById('next-btn');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const progressText = document.getElementById('progress-text');
    const resultsContainer = document.getElementById('results-container');
    const scorePercent = document.getElementById('score-percent');
    const scoreCorrect = document.getElementById('score-correct');
    const scoreTotal = document.getElementById('score-total');
    const resultMessage = document.getElementById('result-message');
    const restartButton = document.getElementById('restart-btn');
    const progressCircle = document.querySelector('.progress-ring-circle');

    // Variáveis do Quiz
    let currentQuestion = 0;
    let score = 0;
    let quizCompleted = false;

    // Inicialização
    function initQuiz() {
        loadQuestion();
        
        // Configura o círculo de progresso
        if (progressCircle) {
            const radius = progressCircle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            progressCircle.style.strokeDashoffset = circumference;
        }
    }

    // Carrega pergunta
    function loadQuestion() {
        if (currentQuestion >= quizData.questions.length) {
            showResults();
            return;
        }

        const question = quizData.questions[currentQuestion];
        questionText.textContent = question.question;

        // Atualiza progresso
        const progress = ((currentQuestion) / quizData.questions.length) * 100;
        progressBarFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${quizData.questions.length}`;

        // Limpa opções
        optionsContainer.innerHTML = '';
        feedbackContainer.style.display = 'none';

        // Adiciona opções
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('quiz-option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
    }

    // Seleciona opção
    function selectOption(index) {
        if (quizCompleted) return;

        const question = quizData.questions[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        // Desabilita todas as opções
        options.forEach(opt => opt.disabled = true);
        
        // Marca opção selecionada
        options[index].classList.add('selected');
        
        // Verifica resposta
        if (index === question.answer) {
            options[index].classList.add('correct');
            score++;
            showCelebration();
        } else {
            options[index].classList.add('incorrect');
            options[question.answer].classList.add('correct');
        }
        
        // Mostra feedback
        feedbackText.textContent = question.feedback;
        feedbackText.className = 'feedback-content ' + (index === question.answer ? 'correct' : 'incorrect');
        feedbackContainer.style.display = 'block';
    }

    // Animação de celebração
    function showCelebration() {
        // Cria confetes
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 120}, 100%, 50%)`;
            confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            document.body.appendChild(confetti);
            
            // Remove após animação
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
        
        // Efeito de fogos de artifício
        const fireworks = document.createElement('div');
        fireworks.classList.add('fireworks');
        document.body.appendChild(fireworks);
        
        setTimeout(() => {
            fireworks.remove();
        }, 1000);
    }

    // Mostra resultados
    function showResults() {
        document.querySelector('.quiz-content').style.display = 'none';
        resultsContainer.style.display = 'block';
        
        const percentage = Math.round((score / quizData.questions.length) * 100);
        scorePercent.textContent = `${percentage}%`;
        scoreCorrect.textContent = score;
        scoreTotal.textContent = quizData.questions.length;
        
        // Animação do círculo de progresso
        if (progressCircle) {
            const radius = progressCircle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            const offset = circumference - (percentage / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
        
        // Mensagem personalizada
        let message;
        if (percentage >= 80) {
            message = 'Excelente! Você é um verdadeiro conhecedor do Vale do Ribeira!';
        } else if (percentage >= 60) {
            message = 'Bom trabalho! Você conhece bem a região, mas ainda pode aprender mais.';
        } else if (percentage >= 40) {
            message = 'Você acertou algumas! Continue explorando para conhecer melhor o Vale.';
        } else {
            message = 'Não desanime! O Vale do Ribeira é cheio de surpresas para descobrir.';
        }
        
        resultMessage.textContent = message;
        quizCompleted = true;
    }

    // Event Listeners
    nextButton.addEventListener('click', () => {
        currentQuestion++;
        loadQuestion();
    });

    restartButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        quizCompleted = false;
        document.querySelector('.quiz-content').style.display = 'block';
        resultsContainer.style.display = 'none';
        loadQuestion();
    });

    // Inicia o quiz
    initQuiz();
});