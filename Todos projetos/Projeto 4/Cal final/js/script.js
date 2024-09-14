function calculatePregnancy() {
    const age = parseInt(document.getElementById('age').value);
    let percentage;

    if (age >= 13 && age <= 15) {
        percentage = 0.9; // Probabilidade baixa
    } else if (age >= 16 && age <= 20) {
        percentage = 22.6; // Alta
    } else if (age >= 21 && age <= 30) {
        percentage = 20; // Pouco alta
    } else if (age >= 31 && age <= 35) {
        percentage = 15; // Moderada
    } else if (age >= 36 && age <= 39) {
        percentage = 10; // Baixa
    } else if (age >= 40 && age <= 44) {
        percentage = 5; // Muito baixa
    } else if (age >= 45 && age <= 65) {
        percentage = 3; // Extremamente baixa
    } else {
        percentage = 0; // Fora da faixa etária
    }

    document.getElementById('resultPregnancy').innerText = `Probabilidade estimada de gravidez: ${percentage}%`;
}

function calculateFertility() {
    const cycleLength = parseInt(document.getElementById('cycleLengthFertility').value);
    const lastPeriodDate = new Date(document.getElementById('lastPeriodFertility').value);

    if (!lastPeriodDate.getTime()) {
        document.getElementById('resultFertility').innerText = 'Por favor, insira uma data válida.';
        return;
    }

    // Calcula a data da próxima menstruação
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    // Calcula o dia da ovulação como 14 dias antes da próxima menstruação
    const ovulationDay = new Date(nextPeriodDate);
    ovulationDay.setDate(ovulationDay.getDate() - 14);

    // Calcula o início e o fim do período fértil
    const fertilityStart = new Date(ovulationDay);
    fertilityStart.setDate(fertilityStart.getDate() - 5); // Período fértil começa 5 dias antes da ovulação
    const fertilityEnd = new Date(ovulationDay);
    fertilityEnd.setDate(fertilityEnd.getDate() + 1); // Período fértil termina 1 dia após a ovulação

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    document.getElementById('resultFertility').innerHTML = `Seu período fértil estimado é de ${fertilityStart.toLocaleDateString('pt-BR', options)} até ${fertilityEnd.toLocaleDateString('pt-BR', options)}.`;
}

function calculateNextPeriod() {
    const cycleLength = parseInt(document.getElementById('cycleLengthNext').value);
    const lastPeriodDate = new Date(document.getElementById('lastPeriodNext').value);

    if (!lastPeriodDate.getTime()) {
        document.getElementById('resultNextPeriod').innerText = 'Por favor, insira uma data válida.';
        return;
    }

    // Calcula a data do próximo período menstrual
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    document.getElementById('resultNextPeriod').innerHTML = `Sua próxima menstruação está estimada para o dia ${nextPeriodDate.toLocaleDateString('pt-BR', options)}.`;
}

function calculateFertilityFixed() {
    // Define a duração do ciclo menstrual (em dias) como 28 dias
    const cycleLength = 28;

    // Obtém a data do início da última menstruação do input
    const lastPeriodDate = new Date(document.getElementById('lastPeriodFertilityFixed').value);

    // Verifica se a data é válida
    if (!lastPeriodDate.getTime()) {
        document.getElementById('resultFertilityFixed').innerText = 'Por favor, insira uma data válida.';
        return;
    }

    // Calcula a data da próxima menstruação
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    // Calcula o dia da ovulação como 14 dias antes da próxima menstruação
    const ovulationDay = new Date(nextPeriodDate);
    ovulationDay.setDate(ovulationDay.getDate() - 14);

    // Calcula o início e o fim do período fértil
    const fertilityStart = new Date(ovulationDay);
    fertilityStart.setDate(fertilityStart.getDate() - 5); // Período fértil começa 5 dias antes da ovulação
    const fertilityEnd = new Date(ovulationDay);
    fertilityEnd.setDate(fertilityEnd.getDate() + 1); // Período fértil termina 1 dia após a ovulação

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    document.getElementById('resultFertilityFixed').innerHTML = `Seu período fértil estimado é de ${fertilityStart.toLocaleDateString('pt-BR', options)} até ${fertilityEnd.toLocaleDateString('pt-BR', options)}.`;
}

function calculateNextPeriodFixed() {
    // Define a duração do ciclo menstrual (em dias)
    const cycleLength = 28;

    // Obtém a data do início da última menstruação do input
    const lastPeriodDate = new Date(document.getElementById('lastPeriodNextFixed').value);

    // Verifica se a data é válida
    if (!lastPeriodDate.getTime()) {
        document.getElementById('resultNextPeriodFixed').innerText = 'Por favor, insira uma data válida.';
        return;
    }

    // Calcula a data do próximo período menstrual
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    // Define o formato da data
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    // Exibe o resultado
    document.getElementById('resultNextPeriodFixed').innerHTML = `Sua próxima menstruação está estimada para o dia ${nextPeriodDate.toLocaleDateString('pt-BR', options)}.`;
}
