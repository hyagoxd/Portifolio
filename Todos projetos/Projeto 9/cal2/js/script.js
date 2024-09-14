function calculatePregnancy() {
    const age = parseInt(document.getElementById('age').value);
    let percentage;

    if (age >= 13 && age <= 15) {
        percentage = 0; // Probabilidade baixa
    } else if (age >= 16 && age <= 19) {
        percentage = 70; // Alta
    } else if (age >= 20 && age <= 24) {
        percentage = 80; // Muito alta
    } else if (age >= 25 && age <= 29) {
        percentage = 70; // Alta
    } else if (age >= 30 && age <= 34) {
        percentage = 50; // Moderada
    } else if (age >= 35 && age <= 39) {
        percentage = 30; // Menor
    } else if (age >= 40 && age <= 44) {
        percentage = 15; // Baixa
    } else if (age >= 45 && age <= 50) {
        percentage = 5; // Muito baixa
    } else {
        percentage = 0; // Fora da faixa etária
    }

    document.getElementById('resultPregnancy').innerText = `Probabilidade estimada de gravidez: ${percentage}%`;
}

function calculateFertility() {
    const cycleLength = parseInt(document.getElementById('cycleLength').value);
    const lastPeriodDate = new Date(document.getElementById('lastPeriod').value);

    if (!lastPeriodDate.getTime()) {
        document.getElementById('resultFertility').innerText = 'Por favor, insira uma data válida.';
        return;
    }

    // Assumindo um ciclo menstrual típico de 28 dias e que a ovulação ocorre 14 dias antes da próxima menstruação
    const ovulationDay = new Date(lastPeriodDate);
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);
    
    ovulationDay.setDate(ovulationDay.getDate() + cycleLength - 14); // Ovulação 14 dias antes do próximo período

    const fertilityStart = new Date(ovulationDay);
    fertilityStart.setDate(fertilityStart.getDate() - 5); // Período fértil começa 5 dias antes da ovulação
    const fertilityEnd = new Date(ovulationDay);
    fertilityEnd.setDate(fertilityEnd.getDate() + 1); // Período fértil termina 1 dia após a ovulação

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    document.getElementById('resultFertility').innerHTML = `Seu período fértil estimado é de ${fertilityStart.toLocaleDateString('pt-BR', options)} até ${fertilityEnd.toLocaleDateString('pt-BR', options)}.`;
}
