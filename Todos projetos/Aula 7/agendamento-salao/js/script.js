function adicionarAgendamento(){
    let nameInput = document.querySelector('#nameInput').value.trim();
    let dateInput = document.querySelector('#dateInput').value;
    let timeInput = document.querySelector('#timeInput').value;

    if(nameInput && dateInput && timeInput){
        let dateF = new Date(dateInput);
        let dateFormat = new Intl.DateTimeFormat('pt-BR').format(dateF);
        let clientList = document.querySelector('#clientList');
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-itens-center';
        listItem.textContent = `Cliente: ${nameInput}, Data: ${dateFormat}, Hora: ${timeInput}`;

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
    }else{
        alert('Por favor, preencha todos os campos');
    }
}