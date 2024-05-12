const processadorBanco = "(.+Banco de currículos.+)|(.+banco de curriculos.+)|(.+baco de currículo.+)|(.+Banco de curriculo.+)|(.+banco de talentos.+)|(.+banco de talento.+)|(.+banco de Candidatos.+)|(.+banco de candidato.+)|(.+Banco de currículos)|(.+banco de curriculos)|(.+baco de currículo)|(.+Banco de curriculo)|(.+banco de talentos)|(.+banco de talento)|(.+banco de Candidatos)|(.+banco de candidato)|(Banco de currículos.+)|(banco de curriculos.+)|(baco de currículo.+)|(Banco de curriculo.+)|(banco de talentos.+)|(banco de talento.+)|(banco de Candidatos.+)|(banco de candidato.+)|(.+Banco de Currículos.+)|(.+VAGA BANCO.+)"
const descricaoPadrao = "Atuará nas atividades internas e demais funções pertinentes ao cargo. Necessário conhecimento na área de atuação."

async function copiarElementoAnterior(button) {
    var elementoAnterior = button.previousElementSibling;
    var texto = elementoAnterior.innerText;
    await navigator.clipboard.writeText(texto);
    exibirNotificacao(button, 'Copiado');
}

async function copiarTextoDoBotao(button) {
    var texto = button.innerText;
    await navigator.clipboard.writeText(texto);
    exibirNotificacao(button, 'Copiado');
}

async function copiarTermoPadrao(button, processador) {
    await navigator.clipboard.writeText(processador);
    exibirNotificacao(button, 'Copiado');
}

function exibirNotificacao(button, mensagem) {
    var tooltip = document.querySelector('.tooltip');
    tooltip.innerText = mensagem;
    tooltip.style.display = 'block';

    var rect = button.getBoundingClientRect();
    var x = rect.left + rect.width;
    var y = rect.top - 20;
    tooltip.style.top = y + 'px';
    tooltip.style.left = x + 'px';

    setTimeout(function () {
        tooltip.style.display = 'none';
    }, 500);
}