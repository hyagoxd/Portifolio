function calcularHoras(horaInicio, horaTermino){
    let inicio = new Date(`1970-01-01T${horaInicio}:00`);
    let termino = new Date(`1970-01-01T${horaTermino}:00`);

    if(termino < inicio){
        alert('A hora de término não pode ser anterior à hora de início.');
        return null;
    }

    let diff = termino - inicio;
    let horas = Math.floor(diff / (1000 * 60 * 60));
    let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Calcular o total de horas em formato decimal
    let horasDecimal = horas + minutos / 60;
    return { horas: `${horas}h ${minutos}min`, decimal: horasDecimal };  
}

function adicionarRegistro(){
    let nomeFuncionario = document.querySelector('#nomeFuncionario').value.trim();
    let dataTrabalho = document.querySelector('#dataTrabalho').value;
    let horaInicio = document.querySelector('#horaInicio').value;
    let horaTermino = document.querySelector('#horaTermino').value;
    let valorHora = parseFloat(document.querySelector('#valorHora').value); // Converter para número decimal

    if(nomeFuncionario && dataTrabalho && horaInicio && horaTermino && !isNaN(valorHora)){
        let horas = calcularHoras(horaInicio, horaTermino);

        if(horas){
            let valorTotal = horas.decimal * valorHora;
            let dataFormatada = new Date(dataTrabalho).toLocaleDateString('pt-BR');
            let registrosTrabalho = document.querySelector('#registrosTrabalho');
            let listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.textContent = `Funcionário: ${nomeFuncionario}, Data: ${dataFormatada}, Horas Trabalhadas: ${horas.horas}, Valor Total: R$ ${valorTotal.toFixed(2)}`;

            let botaoRemover = document.createElement('button');
            botaoRemover.className = 'btn btn-danger btn-sm';
            botaoRemover.textContent = 'Remover';
            botaoRemover.onclick = function(){
                registrosTrabalho.removeChild(listItem);
            };
            listItem.appendChild(botaoRemover);
            registrosTrabalho.appendChild(listItem);

            // Limpar campos após adicionar registro
            document.querySelector('#nomeFuncionario').value = '';
            document.querySelector('#dataTrabalho').value = '';
            document.querySelector('#horaInicio').value = '';
            document.querySelector('#horaTermino').value = '';
            document.querySelector('#valorHora').value = '';
        }
    } else {
        alert('Por favor, preencha todos os campos e certifique-se de que o valor da hora seja válido.');
    }
}