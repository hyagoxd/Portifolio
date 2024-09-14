document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('contact-modal');
    var openModalBtn = document.getElementById('open-modal-btn');
    var closeModalBtn = document.getElementById('close-modal');

    // Abre o modal quando o botão é clicado
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Fecha o modal quando o botão de fechar é clicado
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fecha o modal se o usuário clicar fora do conteúdo do modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Mensagem de sucesso ao enviar o formulário
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        
        alert('Obrigado por entrar em contato!'); // Exibe uma mensagem de agradecimento
        modal.style.display = 'none'; // Fecha o modal após o envio
    });
});
