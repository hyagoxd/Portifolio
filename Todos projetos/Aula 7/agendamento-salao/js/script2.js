function adicionarAgendamento(){
    let nameInput = document.querySelector('#nameInput').value.trim();
    let dateInput = document.querySelector('#dateInput').value;
    let timeInput = document.querySelector('#timeInput').value;

    // Função para formatar a data para DD/MM/AAAA
    function formatarDataParaBrasileiro(data) {
        const partesData = data.split('-'); // Assume que a data está no formato ISO (AAAA-MM-DD)
        if (partesData.length === 3) {
            return `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
        }
        return data; // Retorna a data original se não puder ser formatada corretamente
    }

    // Formata a data inserida para o formato brasileiro
    let dataFormatada = formatarDataParaBrasileiro(dateInput);

    if(nameInput && dateInput && timeInput){
        let clientList = document.querySelector('#clientList');
        let listItem =  document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `Cliente: ${nameInput}, Data: ${dataFormatada}, Hora: ${timeInput}`;

        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Remover';
        deleteButton.onclick = function(){
            clientList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        clientList.appendChild(listItem);

        document.querySelector('#nameInput').value = '';
        document.querySelector('#dateInput').value = '';
        document.querySelector('#timeInput').value = '';
    } else {
        alert('Por favor, preencha todos os campos');
    }
}
