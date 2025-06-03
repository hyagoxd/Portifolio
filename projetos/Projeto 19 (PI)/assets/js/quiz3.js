document.addEventListener('DOMContentLoaded', function() {
    const quizData = {
        title: "Desafio Ambiental",
        description: "Questões avançadas sobre conservação e sustentabilidade no Vale do Ribeira",
        questions: [
            {
                question: "Qual é o principal desafio para a conservação no Vale do Ribeira?",
                options: [
                    "Conciliação entre desenvolvimento e preservação",
                    "Falta de recursos financeiros",
                    "Desinteresse da população",
                    "Excesso de áreas protegidas"
                ],
                answer: 0,
                feedback: "Exato! Encontrar o equilíbrio entre desenvolvimento e preservação é o maior desafio."
            },
            {
                question: "O que é o Mosaico de Unidades de Conservação do Jacupiranga?",
                options: [
                    "Conjunto de áreas protegidas no Vale do Ribeira",
                    "Tipo de arte local",
                    "Festival cultural",
                    "Projeto de reflorestamento"
                ],
                answer: 0,
                feedback: "Correto! É um conjunto de unidades de conservação que protegem a biodiversidade."
            },
            {
                question: "Qual projeto promove o desenvolvimento sustentável no Vale do Ribeira?",
                options: [
                    "Projeto Vale do Futuro",
                    "Programa de Agricultura Orgânica",
                    "Rota da Banana",
                    "Todos os mencionados"
                ],
                answer: 3,
                feedback: "Perfeito! Todos esses projetos contribuem para o desenvolvimento sustentável."
            },
            {
                question: "Qual é a importância das comunidades quilombolas para a conservação?",
                options: [
                    "Mantêm práticas agrícolas tradicionais sustentáveis",
                    "Protegem o conhecimento sobre plantas medicinais",
                    "Atuam como guardiões do território",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Exato! As comunidades tradicionais são essenciais para a conservação."
            },
            {
                question: "Como o turismo pode contribuir para a preservação do Vale do Ribeira?",
                options: [
                    "Gerando renda para comunidades locais",
                    "Criando valor econômico para a natureza preservada",
                    "Promovendo educação ambiental",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Correto! O turismo sustentável pode contribuir de todas essas formas."
            },
            {
                question: "Qual é o maior impacto da mineração no Vale do Ribeira?",
                options: [
                    "Contaminação dos rios",
                    "Desmatamento",
                    "Perda de biodiversidade",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Infelizmente a mineração causa todos esses impactos."
            },
            {
                question: "O que é agroecologia?",
                options: [
                    "Prática agrícola que imita os ecossistemas naturais",
                    "Uso intensivo de agrotóxicos",
                    "Cultivo em larga escala",
                    "Técnica de irrigação"
                ],
                answer: 0,
                feedback: "Exato! A agroecologia promove a sustentabilidade."
            },
            {
                question: "Quantas comunidades quilombolas existem no Vale do Ribeira?",
                options: [
                    "Mais de 80 comunidades",
                    "Cerca de 30 comunidades",
                    "Menos de 10 comunidades",
                    "Aproximadamente 50 comunidades"
                ],
                answer: 0,
                feedback: "Correto! O Vale abriga uma das maiores concentrações de comunidades quilombolas do país."
            },
            {
                question: "Qual é o principal produto da agricultura familiar na região?",
                options: [
                    "Banana",
                    "Palmito",
                    "Feijão",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Certo! A agricultura familiar produz diversos alimentos."
            },
            {
                question: "O que é o Protocolo de Consulta Quilombola?",
                options: [
                    "Documento que garante o direito à consulta prévia",
                    "Formulário de cadastro",
                    "Tipo de contrato agrícola",
                    "Regulamento ambiental"
                ],
                answer: 0,
                feedback: "Exato! É um importante instrumento de garantia de direitos."
            },
            {
                question: "Qual é o papel das mulheres na conservação do Vale?",
                options: [
                    "Guardiãs das sementes crioulas",
                    "Gestoras do conhecimento tradicional",
                    "Lideranças comunitárias",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Perfeito! As mulheres desempenham todos esses papéis."
            },
            {
                question: "O que é o Sistema Agrícola Tradicional do Vale do Ribeira?",
                options: [
                    "Patrimônio Cultural do Brasil",
                    "Técnica de cultivo itinerante",
                    "Método de plantio em encostas",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Correto! É reconhecido como patrimônio e envolve técnicas tradicionais."
            },
            {
                question: "Qual é o maior predador aquático do Vale do Ribeira?",
                options: [
                    "Jacaré-do-papo-amarelo",
                    "Lontra",
                    "Piranha",
                    "Traíra"
                ],
                answer: 1,
                feedback: "Exato! A lontra é o maior predador dos ecossistemas aquáticos locais."
            },
            {
                question: "Qual é a principal ameaça às comunidades tradicionais?",
                options: [
                    "Perda de território",
                    "Escassez de recursos naturais",
                    "Pressão de grandes empreendimentos",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Infelizmente todas essas ameaças estão presentes."
            },
            {
                question: "O que é o Parque Estadual Turístico do Alto Ribeira (PETAR)?",
                options: [
                    "Unidade de conservação com centenas de cavernas",
                    "Área de lazer urbano",
                    "Parque aquático",
                    "Reserva privada"
                ],
                answer: 0,
                feedback: "Correto! O PETAR é famoso por suas cavernas e biodiversidade."
            },
            {
                question: "Qual é o principal desafio do saneamento básico na região?",
                options: [
                    "Falta de tratamento de esgoto",
                    "Contaminação de nascentes",
                    "Precariedade no abastecimento",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Infelizmente todos esses problemas são encontrados."
            },
            {
                question: "O que é o Programa de Aquisição de Alimentos (PAA)?",
                options: [
                    "Política de compra da agricultura familiar",
                    "Distribuição de cestas básicas",
                    "Programa de merenda escolar",
                    "Importação de alimentos"
                ],
                answer: 0,
                feedback: "Exato! O PAA fortalece a agricultura familiar local."
            },
            {
                question: "Qual é a importância dos sítios arqueológicos do Vale?",
                options: [
                    "Revelam a presença humana há milhares de anos",
                    "São importantes para o turismo",
                    "Ajudam a entender a evolução da paisagem",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Perfeito! Os sítios têm importância múltipla."
            },
            {
                question: "Qual é o principal instrumento de gestão ambiental municipal?",
                options: [
                    "Lei Orgânica Municipal",
                    "Código Ambiental",
                    "Plano Diretor",
                    "Todos os anteriores"
                ],
                answer: 3,
                feedback: "Correto! Todos esses instrumentos são importantes."
            },
            {
                question: "Como a educação ambiental pode ajudar na conservação?",
                options: [
                    "Criando consciência ecológica",
                    "Formando agentes multiplicadores",
                    "Promovendo boas práticas",
                    "Todas as alternativas"
                ],
                answer: 3,
                feedback: "Exato! A educação ambiental é fundamental para a conservação."
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

    // Seleciona opção
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

    // Animação de celebração
    function showCelebration() {
        // Efeito de fogos de artifício aprimorado
        const fireworksContainer = document.createElement('div');
        fireworksContainer.className = 'fireworks-container';
        document.body.appendChild(fireworksContainer);

        for (let i = 0; i < 30; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework-particle';
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
            fireworksContainer.appendChild(firework);
        }

        setTimeout(() => {
            fireworksContainer.remove();
        }, 1500);

        // Efeito de pulsação na opção correta
        const correctOption = document.querySelector('.quiz-option.correct');
        correctOption.style.animation = 'pulse-glow 1s ease';
    }

    // Mostra resultados
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
            message = 'Excelente! Você é um especialista nos desafios ambientais do Vale do Ribeira!';
        } else if (percentage >= 60) {
            message = 'Bom trabalho! Você tem um bom conhecimento sobre sustentabilidade na região.';
        } else if (percentage >= 40) {
            message = 'Você acertou algumas! Os desafios ambientais são complexos e vale a pena estudá-los mais.';
        } else {
            message = 'Não desanime! A conservação ambiental é um aprendizado constante.';
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