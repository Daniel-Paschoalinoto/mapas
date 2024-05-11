export const processadorBanco = "(.+Banco de currículos.+)|(.+banco de curriculos.+)|(.+baco de currículo.+)|(.+Banco de curriculo.+)|(.+banco de talentos.+)|(.+banco de talento.+)|(.+banco de Candidatos.+)|(.+banco de candidato.+)|(.+Banco de currículos)|(.+banco de curriculos)|(.+baco de currículo)|(.+Banco de curriculo)|(.+banco de talentos)|(.+banco de talento)|(.+banco de Candidatos)|(.+banco de candidato)|(Banco de currículos.+)|(banco de curriculos.+)|(baco de currículo.+)|(Banco de curriculo.+)|(banco de talentos.+)|(banco de talento.+)|(banco de Candidatos.+)|(banco de candidato.+)|(.+Banco de Currículos.+)|(.+VAGA BANCO.+)"
export const hifen = "-"
export const depoisDoHifen = "-.+"
export const descricaoPadrao = "Atuará nas atividades internas e demais funções pertinentes ao cargo. Necessário conhecimento na área de atuação."
export const naoAplicavel = "Não Aplicável"
export const ampersand = "&"
export const letraAComEspacosEmTorno = " a "

function carregarPadroes() {
    var idBanco = document.querySelector('#processadorBanco');
    idBanco.innerText = processadorBanco;

    var idHifen = document.querySelector('#hifen');
    idHifen.innerText = hifen;

    var idDepoisDoHifen = document.querySelector('#depoisDoHifen');
    idDepoisDoHifen.innerText = depoisDoHifen;

    var idDescricaoPadrao = document.querySelector('#descricaoPadrao');
    idDescricaoPadrao.innerText = descricaoPadrao;

    var idNaoAplicavel = document.querySelector('#naoAplicavel');
    idNaoAplicavel.innerText = naoAplicavel;

    var idAmpersand = document.querySelector('#ampersand');
    idAmpersand.innerText = ampersand;

    var idLetraAComEspacosEmTorno = document.querySelector('#letraAComEspacosEmTorno');
    idLetraAComEspacosEmTorno.innerText = letraAComEspacosEmTorno;
}

document.addEventListener('DOMContentLoaded', function () {
    carregarPadroes();
});