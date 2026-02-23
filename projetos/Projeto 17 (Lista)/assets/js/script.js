(function () {
    const inputTarefa = document.getElementById('nova-tarefa');
    const btnAdicionar = document.getElementById('adicionar-btn');
    const listaTarefas = document.getElementById('lista-tarefas');
    const filtros = document.querySelectorAll('.filtro button');
    let tarefas = [];

    // Load tasks from localStorage
    function carregarTarefas() {
        const dados = localStorage.getItem('tarefas');
        if (dados) {
            try {
                tarefas = JSON.parse(dados);
            } catch {
                tarefas = [];
            }
        }
    }

    // Save tasks to localStorage
    function salvarTarefas() {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    // Render tasks based on filter
    let filtroAtual = 'todas';
    function renderizar() {
        listaTarefas.innerHTML = '';
        let tarefasFiltradas = tarefas;
        if (filtroAtual === 'pendentes') {
            tarefasFiltradas = tarefas.filter(t => !t.completa);
        } else if (filtroAtual === 'completas') {
            tarefasFiltradas = tarefas.filter(t => t.completa);
        }

        if (tarefasFiltradas.length === 0) {
            const vazio = document.createElement('li');
            vazio.textContent = 'Nenhuma tarefa para mostrar.';
            vazio.style.textAlign = 'center';
            vazio.style.color = '#999';
            vazio.style.fontStyle = 'italic';
            vazio.setAttribute('tabindex', '0');
            listaTarefas.appendChild(vazio);
            return;
        }

        tarefasFiltradas.forEach(tarefa => {
            const li = document.createElement('li');
            li.classList.toggle('completed', tarefa.completa);
            li.setAttribute('data-id', tarefa.id);

            const label = document.createElement('label');
            label.textContent = tarefa.texto;
            label.tabIndex = 0;

            label.addEventListener('click', () => toggleCompleta(tarefa.id));
            label.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCompleta(tarefa.id);
                }
            });

            const btnExcluir = document.createElement('button');
            btnExcluir.className = 'delete-btn';
            btnExcluir.setAttribute('aria-label', `Excluir tarefa "${tarefa.texto}"`);
            btnExcluir.innerHTML = '&times;';
            btnExcluir.addEventListener('click', () => excluirTarefa(tarefa.id));

            li.appendChild(label);
            li.appendChild(btnExcluir);
            listaTarefas.appendChild(li);
        });
    }

    // Add a new task
    function adicionarTarefa() {
        const texto = inputTarefa.value.trim();
        if (texto === '') {
            alert('Por favor, digite uma tarefa.');
            return;
        }
        const novaTarefa = {
            id: Date.now().toString(),
            texto,
            completa: false,
        };
        tarefas.unshift(novaTarefa);
        salvarTarefas();
        renderizar();
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    // Toggle task complete status
    function toggleCompleta(id) {
        tarefas = tarefas.map(t => {
            if (t.id === id) {
                return { ...t, completa: !t.completa };
            }
            return t;
        });
        salvarTarefas();
        renderizar();
    }

    // Delete a task
    function excluirTarefa(id) {
        tarefas = tarefas.filter(t => t.id !== id);
        salvarTarefas();
        renderizar();
    }

    // Filter buttons functionality
    filtros.forEach(btn => {
        btn.addEventListener('click', () => {
            filtros.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            filtroAtual = btn.getAttribute('data-filtro');
            renderizar();
        });
    });

    // Event listeners
    btnAdicionar.addEventListener('click', adicionarTarefa);
    inputTarefa.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            adicionarTarefa();
        }
    });

    // Initial loading
    carregarTarefas();
    renderizar();
})();