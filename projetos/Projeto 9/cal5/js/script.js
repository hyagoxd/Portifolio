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
