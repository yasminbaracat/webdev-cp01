function calcular() {
    horaI = parseInt(document.getElementById('horaIni').value);
    minI = parseInt(document.getElementById('minIni').value);
    horaF = parseInt(document.getElementById('horaFim').value)
    minF = parseInt(document.getElementById('minFim').value);

    // Convertendo tudo para minutos
    inicioEmMinutos = (horaI * 60) + minI;
    fimEmMinutos = (horaF * 60) + minF;

    // Calculando a diferença
    duracaoEmMinutos = fimEmMinutos - inicioEmMinutos;

    // Convertendo de volta para horas e minutos
    horas = Math.floor(duracaoEmMinutos / 60);
    minutos = duracaoEmMinutos % 60;

    // Exibindo o resultado
    document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('mintuos').innerText = minutos.toString().padStart(2, '0');
}
