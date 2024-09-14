function calcularHoras(horaInicio, horaTermino){
    let inicio = new Date(`1970-01-01T${horaInicio}:00`);
    let termino = new Date(`1970-01-01T${horaTermino}:00`);

    if(termino < inicio){
        alert('A hora de término nao pode ser anterior à hora de inicio.');
        return null;
    }

    let diff = termino - inicio;
    let horas = Math.floor(diff / (1000 * 60 * 60));
    let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${horas}h ${minutos}min`;  
}

function adicionarRegistro(){
    let nomeFuncionario = document.querySelector('#nomeFuncionario').value.trim();
    let dataTrabalho = document.querySelector('#dataTrabalho').value;
    let horaInicio = document.querySelector('#horaInicio').value;
    let horaTermino = document.querySelector('#horaTermino').value;
    let valorHora = document.querySelector('#valorHora').value;

    if(nomeFuncionario && dataTrabalho && horaInicio && horaTermino){
        let horasTotais = calcularHoras(horaInicio, horaTermino);

        if(horasTotais){
            let dataFormatada = new Date(dataTrabalho).toLocaleDateString('pt-BR');
            let registrosTrabalho = document.querySelector('#registrosTrabalho');
            let listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between aling-items-center';
            listItem.textContent = `Funcionarios: ${nomeFuncionario}, Data: ${dataFormatada}, Horas Trabalhadas: ${horasTotais} Valor por Hora: ${valorHora}`;

            let botaoRemover = document.createElement('button');
            botaoRemover.className =  'btn btn-danger btn-sm';
            botaoRemover.textContent = 'Remover';
            botaoRemover.onclick = function(){
                registrosTrabalho.removeChild(listItem);
            };
            listItem.appendChild(botaoRemover);
            registrosTrabalho.appendChild(listItem)

            document.querySelector('#nomeFuncionario').value = '';
            document.querySelector('#dataTrabalho').value = '';
            document.querySelector('#horaInicio').value = '';
            document.querySelector('#horaTermino').value = '';
            document.querySelector('#valorHora').value = '';
        }
    }else{
        alert('Por favor, preencha todos os campos')
    }
}