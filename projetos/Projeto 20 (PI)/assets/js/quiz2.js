document.addEventListener('DOMContentLoaded', function() {
    const quizData = {
        title: "Preservação Hídrica",
        description: "Teste seus conhecimentos sobre as nascentes e rios do Vale do Ribeira",
        questions: [
            {
                question: "Qual a importância do Vale do Ribeira para os recursos hídricos?",
                options: [
                    "Possui o maior aquífero do Brasil",
                    "Abastece várias cidades com água potável",
                    "É a única fonte de água do estado",
                    "Não tem importância significativa"
                ],
                answer: 1,
                feedback: "Correto! O Vale é crucial no abastecimento de água para várias cidades da região."
            },
            {
                question: "Qual é a principal ameaça aos rios do Vale do Ribeira?",
                options: [
                    "Poluição industrial",
                    "Desmatamento das margens",
                    "Pesca predatória",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Verdade! Todas essas ameaças impactam os rios em diferentes níveis."
            },
            {
                question: "O que são APPs no contexto de preservação hídrica?",
                options: [
                    "Áreas de Proteção Permanente",
                    "Aplicativos para monitoramento",
                    "Associações de Proteção aos Peixes",
                    "Águas Potáveis Purificadas"
                ],
                answer: 0,
                feedback: "Exato! As APPs protegem nascentes e margens de rios."
            },
            {
                question: "Qual é a melhor prática para preservar nascentes?",
                options: [
                    "Cercar a área ao redor",
                    "Plantar árvores nativas",
                    "Evitar atividades agrícolas próximas",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Perfeito! A combinação dessas práticas é essencial para a preservação."
            },
            {
                question: "Qual órgão é responsável pela gestão dos recursos hídricos no Vale do Ribeira?",
                options: [
                    "Comitê de Bacia do Ribeira de Iguape e Litoral Sul",
                    "IBAMA",
                    "Secretaria de Meio Ambiente do Estado",
                    "Prefeitura Municipal"
                ],
                answer: 0,
                feedback: "Correto! O Comitê de Bacia é o principal órgão gestor."
            },
            {
                question: "Quantas nascentes importantes existem no Vale do Ribeira?",
                options: [
                    "Mais de 500",
                    "Cerca de 200",
                    "Menos de 50",
                    "Aproximadamente 350"
                ],
                answer: 0,
                feedback: "Isso mesmo! A região possui centenas de nascentes que alimentam os rios."
            },
            {
                question: "Qual é o principal uso da água no Vale do Ribeira?",
                options: [
                    "Irrigação agrícola",
                    "Abastecimento urbano",
                    "Geração de energia",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Certo! A água tem múltiplos usos na região."
            },
            {
                question: "O que é mata ciliar?",
                options: [
                    "Vegetação que cresce junto aos cursos d'água",
                    "Tipo de árvore frutífera",
                    "Técnica de cultivo",
                    "Doença que afeta plantas"
                ],
                answer: 0,
                feedback: "Exato! A mata ciliar protege os rios e nascentes."
            },
            {
                question: "Qual projeto protege as nascentes do Vale do Ribeira?",
                options: [
                    "Projeto Nascentes",
                    "Água para o Futuro",
                    "Protetores de Nascentes",
                    "Todos os mencionados"
                ],
                answer: 3,
                feedback: "Perfeito! Vários projetos atuam na preservação."
            },
            {
                question: "Qual a profundidade média do aquífero do Vale do Ribeira?",
                options: [
                    "50 metros",
                    "100 metros",
                    "200 metros",
                    "Variável conforme a região"
                ],
                answer: 3,
                feedback: "Correto! A profundidade varia conforme a geologia local."
            },
            {
                question: "Qual mineral é extraído na região e pode impactar os recursos hídricos?",
                options: [
                    "Ouro",
                    "Chumbo",
                    "Calcário",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Infelizmente todas essas atividades mineradoras ocorrem na região."
            },
            {
                question: "Como o desmatamento afeta os rios do Vale?",
                options: [
                    "Aumenta a erosão",
                    "Reduz a infiltração de água",
                    "Altera o regime de chuvas",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Exato! Todos esses impactos são observados."
            },
            {
                question: "Qual é a vazão média do Rio Ribeira de Iguape?",
                options: [
                    "50 m³/s",
                    "100 m³/s",
                    "200 m³/s",
                    "350 m³/s"
                ],
                answer: 2,
                feedback: "Correto! A vazão média é de aproximadamente 200 m³/s."
            },
            {
                question: "O que é um poço artesiano?",
                options: [
                    "Poço que atinge água subterrânea sob pressão",
                    "Poço raso cavado manualmente",
                    "Técnica de armazenamento de água da chuva",
                    "Sistema de filtragem de água"
                ],
                answer: 0,
                feedback: "Isso mesmo! Poços artesianos acessam aquíferos profundos."
            },
            {
                question: "Qual é o principal desafio para a gestão hídrica no Vale?",
                options: [
                    "Falta de fiscalização",
                    "Conflitos pelo uso da água",
                    "Poluição difusa",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Infelizmente todos esses desafios estão presentes."
            }
        ]
    };

    // Elementos do DOM (mesmo do quiz1.js)
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

    // Inicialização (mesma do quiz1.js)
    function initQuiz() {
        loadQuestion();
        
        if (progressCircle) {
            const radius = progressCircle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            progressCircle.style.strokeDashoffset = circumference;
        }
    }

    // Carrega pergunta (mesma do quiz1.js)
    function loadQuestion() {
        if (currentQuestion >= quizData.questions.length) {
            showResults();
            return;
        }

        const question = quizData.questions[currentQuestion];
        questionText.textContent = question.question;

        const progress = ((currentQuestion) / quizData.questions.length) * 100;
        progressBarFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${quizData.questions.length}`;

        optionsContainer.innerHTML = '';
        feedbackContainer.style.display = 'none';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('quiz-option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
    }

    // Seleciona opção (mesma do quiz1.js)
    function selectOption(index) {
        if (quizCompleted) return;

        const question = quizData.questions[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach(opt => opt.disabled = true);
        options[index].classList.add('selected');
        
        if (index === question.answer) {
            options[index].classList.add('correct');
            score++;
            showCelebration();
        } else {
            options[index].classList.add('incorrect');
            options[question.answer].classList.add('correct');
        }
        
        feedbackText.textContent = question.feedback;
        feedbackText.className = 'feedback-content ' + (index === question.answer ? 'correct' : 'incorrect');
        feedbackContainer.style.display = 'block';
    }

    // Animação de celebração (mesma do quiz1.js)
    function showCelebration() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 120}, 100%, 50%)`;
            confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
        
        const fireworks = document.createElement('div');
        fireworks.classList.add('fireworks');
        document.body.appendChild(fireworks);
        
        setTimeout(() => {
            fireworks.remove();
        }, 1000);
    }

    // Mostra resultados (mesma do quiz1.js)
    function showResults() {
        document.querySelector('.quiz-content').style.display = 'none';
        resultsContainer.style.display = 'block';
        
        const percentage = Math.round((score / quizData.questions.length) * 100);
        scorePercent.textContent = `${percentage}%`;
        scoreCorrect.textContent = score;
        scoreTotal.textContent = quizData.questions.length;
        
        if (progressCircle) {
            const radius = progressCircle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            const offset = circumference - (percentage / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
        
        let message;
        if (percentage >= 80) {
            message = 'Excelente! Você demonstrou um conhecimento excepcional sobre os recursos hídricos do Vale!';
        } else if (percentage >= 60) {
            message = 'Bom trabalho! Você tem um bom conhecimento, mas ainda pode aprender mais.';
        } else if (percentage >= 40) {
            message = 'Você acertou algumas questões! Continue estudando os recursos hídricos da região.';
        } else {
            message = 'Não desanime! A água é um recurso precioso que vale a pena conhecer melhor.';
        }
        
        resultMessage.textContent = message;
        quizCompleted = true;
    }

    // Event Listeners (mesma do quiz1.js)
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