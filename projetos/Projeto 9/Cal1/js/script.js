function calculate() {
    const age = parseInt(document.getElementById('age').value);
    let percentage;

    if (age >= 13 && age <= 25) {
        percentage = 70; // Exemplo de porcentagem para essa faixa etária
    } else if (age >= 26 && age <= 35) {
        percentage = 50; // Exemplo de porcentagem para essa faixa etária
    } else if (age >= 36 && age <= 45) {
        percentage = 30; // Exemplo de porcentagem para essa faixa etária
    } else if (age >= 46 && age <= 50) {
        percentage = 15; // Exemplo de porcentagem para essa faixa etária
    } else {
        percentage = 0; // Fora da faixa etária considerada
    }

    document.getElementById('result').innerText = `Probabilidade estimada de gravidez: ${percentage}%`;
}
