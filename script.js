// ============================================
// MENU SANDUÍCHE
// ============================================

const btnSanduiche = document.getElementById('btnSanduiche');
const dropdownMenu = document.getElementById('dropdownMenu');

btnSanduiche.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!btnSanduiche.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
});

// ============================================
// TEMA ESCURO / CLARO COM ÍCONES PERSONALIZADOS
// ============================================

const btnTema = document.getElementById('btnTema');
const imgTemaBtn = document.getElementById('imgTemaBtn');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
    
    if (document.body.classList.contains('tema-escuro')) {
        imgTemaBtn.src = 'imagens/icone-sol.png'; // Ícone do sol (indica voltar ao claro)
    } else {
        imgTemaBtn.src = 'imagens/icone-lua.png'; // Ícone da lua (indica ir ao escuro)
    }
});

// ============================================
// FORMULÁRIO DE SUSTENTABILIDADE
// ============================================

const modalForm = document.getElementById('formModal');
const modalResultado = document.getElementById('resultadoModal');
const btnSimuladorSite = document.getElementById('btnSimulador');

btnSimuladorSite.addEventListener('click', () => {
    modalForm.style.display = 'flex';
    document.getElementById('formSustentabilidade').reset();
});

document.getElementById('fecharModal').onclick = () => modalForm.style.display = 'none';
document.getElementById('fecharResultado').onclick = () => modalResultado.style.display = 'none';
document.getElementById('fecharResultadoBtn').onclick = () => modalResultado.style.display = 'none';

// Calcular sustentabilidade
document.getElementById('calcularBtn').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    if (!nome) {
        alert('Por favor, digite seu nome!');
        return;
    }
    
    const area = document.getElementById('area').value;
    const irrigacao = parseInt(document.getElementById('irrigacao').value);
    const solar = parseInt(document.getElementById('solar').value);
    const drone = parseInt(document.getElementById('drone').value);
    const rotacao = parseInt(document.getElementById('rotacao').value);
    const organico = parseInt(document.getElementById('organico').value);
    
    const pontos = irrigacao + solar + drone + rotacao + organico;
    let porcentagem = Math.round((pontos / 60) * 100);
    if (porcentagem > 100) porcentagem = 100;
    
    let mensagem = '';
    let recomendacoes = [];
    
    if (porcentagem >= 80) {
        mensagem = 'EXCELENTE! Sua fazenda é altamente sustentável!';
    } else if (porcentagem >= 60) {
        mensagem = 'BOM! Você está no caminho certo, mas pode melhorar.';
        if (irrigacao < 15) recomendacoes.push('Invista em irrigação inteligente com sensores');
        if (solar < 15) recomendacoes.push('Instale energia solar para reduzir custos');
    } else if (porcentagem >= 40) {
        mensagem = 'REGULAR! Sua fazenda precisa de melhorias.';
        if (irrigacao < 10) recomendacoes.push('Adote um sistema de irrigação automatizado');
        if (solar < 10) recomendacoes.push('Considere energia solar');
        if (drone < 5) recomendacoes.push('Utilize drones para monitoramento');
    } else {
        mensagem = 'ATENÇÃO! Sua fazenda tem baixa sustentabilidade.';
        recomendacoes.push('Troque a irrigação para um sistema inteligente');
        recomendacoes.push('Invista em energia solar');
        recomendacoes.push('Adquira drones para monitorar a lavoura');
        recomendacoes.push('Faça rotação de cultura regularmente');
        recomendacoes.push('Use fertilizantes orgânicos');
    }
    
    if (area > 100) recomendacoes.push('Área muito grande – divida em setores para melhor gestão');
    
    modalForm.style.display = 'none';
    
    // Montar o resultado
    document.getElementById('resultadoBody').innerHTML = `
        <div class="nota-sustentabilidade">${porcentagem}%</div>
        <p><strong>${nome}</strong>, sua fazenda tem ${porcentagem}% de sustentabilidade!</p>
        <p>${mensagem}</p>
        <div class="recomendacoes">
            <strong>Recomendações para atingir 100%:</strong>
            <ul>
                ${recomendacoes.map(r => `<li>${r}</li>`).join('')}
                ${recomendacoes.length === 0 ? '<li>Continue assim! Você é referência em sustentabilidade!</li>' : ''}
            </ul>
        </div>
        <p style="margin-top: 20px;">Com o Solo<span class="destaque">Tec</span>, você pode atingir a sustentabilidade máxima!</p>
    `;
    
    // BOTÃO PARA ABRIR O SIMULADOR
    const btnAbrirSimulador = document.createElement('button');
    btnAbrirSimulador.textContent = 'CONHEÇA A IDEIA DO APLICATIVO';
    btnAbrirSimulador.className = 'btn-conhecer-app';
    btnAbrirSimulador.onclick = () => {
        modalResultado.style.display = 'none';
        window.open(`simulador.html?nome=${encodeURIComponent(nome)}`, '_blank');
    };
    document.getElementById('resultadoBody').appendChild(btnAbrirSimulador);
    
    modalResultado.style.display = 'flex';
});

console.log('SoloTec carregado! Formulário de sustentabilidade pronto');

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================

const btnVoltarTopo = document.getElementById('btnVoltarTopo');

// Mostrar/esconder botão conforme a rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnVoltarTopo.classList.add('show');
    } else {
        btnVoltarTopo.classList.remove('show');
    }
});

// Voltar ao topo com animação suave
btnVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});