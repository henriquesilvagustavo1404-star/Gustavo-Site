// Pegar nome da URL
function getNomeDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    if (nome && nome !== "") {
        document.getElementById('nomeUsuario').innerHTML = decodeURIComponent(nome);
    }
}

// Horário real
function atualizarHorario() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();
    
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    
    document.getElementById('horarioReal').textContent = `${horas}:${minutos}:${segundos}`;
}

const mensagemDiv = document.getElementById('mensagemApp');

// Botão Irrigar - escolher qual área
document.getElementById('btnIrrigar').onclick = () => {
    let area = prompt('Escolha a área para irrigar:\n1 - Área 1 (Úmida - 85%)\n2 - Área 2 (Quase seca - 45%)\n3 - Área 3 (Seca - 20%)');
    
    if (area === '1') {
        mensagemDiv.innerHTML = 'IRRIGAÇÃO INICIADA! A Área 1 está recebendo água.';
    } else if (area === '2') {
        mensagemDiv.innerHTML = 'IRRIGAÇÃO INICIADA! A Área 2 está recebendo água.';
    } else if (area === '3') {
        mensagemDiv.innerHTML = 'IRRIGAÇÃO INICIADA! A Área 3 está recebendo água. IRRIGAÇÃO DE URGÊNCIA!';
    } else if (area !== null) {
        mensagemDiv.innerHTML = 'OPÇÃO INVÁLIDA! Escolha 1, 2 ou 3.';
    } else {
        mensagemDiv.innerHTML = 'IRRIGAÇÃO CANCELADA!';
    }
};

// Botão Agendar
document.getElementById('btnAgendar').onclick = () => {
    let horario = prompt('Digite a data e horário para agendar a irrigação:');
    if (horario) {
        mensagemDiv.innerHTML = `Irrigação agendada com sucesso para: ${horario}`;
    } else {
        mensagemDiv.innerHTML = 'Agendamento cancelado!';
    }
};

// Botão Histórico
document.getElementById('btnHistorico').onclick = () => {
    mensagemDiv.innerHTML = 'HISTÓRICO: 20/05 - Área 1 - 25 min | 18/05 - Área 2 - 20 min | 15/05 - Área 3 - 30 min';
};

// Botão Gráfico
document.getElementById('btnGrafico').onclick = () => {
    mensagemDiv.innerHTML = 'UMIDADE: Área 1: 85% | Área 2: 45% | Área 3: 20%';
};

// Tema escuro/claro
const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
    btnTema.innerHTML = document.body.classList.contains('tema-escuro') ? 'CLARO' : 'ESCURO';
});

// Iniciar
getNomeDaURL();
atualizarHorario();
setInterval(atualizarHorario, 1000);

console.log('Simulador SoloTec carregado!');