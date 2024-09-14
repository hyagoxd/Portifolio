document.addEventListener('DOMContentLoaded', () => {
    window.addParticipantes = []; // Definir addParticipantes como una propiedad de window
});

function addParticipante() {
    let nomeParticipantes = document.querySelector('#nomeParticipantes');
    let listaParticipantes = document.querySelector('#listaParticipantes');
    let nome = nomeParticipantes.value.trim();

    if (nome && !window.addParticipantes.includes(nome)) { // Verificar con window.addParticipantes
        window.addParticipantes.push(nome);
        nomeParticipantes.value = '';
        atualizarListaParticipantes(listaParticipantes);
    }
}

function distribuirGrupos() {
    let numGrupos = document.querySelector('#numGrupos');
    let gruposDiv = document.querySelector('#grupos');
    let qtdGrupos = parseInt(numGrupos.value);

    if (qtdGrupos > 0 && window.addParticipantes.length > 0) { // Verificar con window.addParticipantes
        let grupos = Array.from({ length: qtdGrupos }, () => []);
        let index = 0;

        let participantesEmbaralhados = window.addParticipantes.sort(() => 0.5 - Math.random());
        participantesEmbaralhados.forEach(participante => {
            grupos[index].push(participante);
            index = (index + 1) % qtdGrupos;
        });
        exibirGrupos(grupos, gruposDiv);
    }
}

function atualizarListaParticipantes(listaParticipantes) {
    listaParticipantes.innerHTML = window.addParticipantes.map((p, i) => `<p>${i + 1}. ${p}</p>`).join('');
}

function exibirGrupos(grupos, gruposDiv) {
    gruposDiv.innerHTML = grupos.map((grupo, i) => `
        <div class="card mb-3">
            <div class="card-header">Grupo ${i + 1}</div>
            <div class="card-body">
                <ul class="list-group">
                    ${grupo.map(participante => `<li class="list-group-item">${participante}</li>`).join('')}
                </ul>
            </div>
        </div>`
    ).join('');
}