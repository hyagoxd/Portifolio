document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    alert('Obrigado por entrar em contato!'); // Exibe uma mensagem de agradecimento
});
