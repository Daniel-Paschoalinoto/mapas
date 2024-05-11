function copiarXpath1(btn, event) {
    // Encontra o elemento pai do botão clicado
    var parentDiv = btn.parentNode;

    // Seleciona o texto dentro do span dentro do elemento pai
    var xpathExpression1 = parentDiv.querySelector('.xpath-expression1').innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(xpathExpression1).then(function() {
        // Mostrar mensagem próxima ao cursor do mouse
        showTooltip('Copiado', event);
    }).catch(function(err) {
        // Caso ocorra algum erro
        console.error('Erro ao copiar XPath: ', err);
    });
}

function copiarProcessador1(btn, event) {
    // Encontra o elemento pai do botão clicado
    var parentDiv = btn.parentNode;

    // Seleciona o texto dentro do span dentro do elemento pai
    var regexExpression1 = parentDiv.querySelector('.regex-expression1').innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(regexExpression1).then(function() {
        // Mostrar mensagem próxima ao cursor do mouse
        showTooltip('Copiado', event);
    }).catch(function(err) {
        // Caso ocorra algum erro
        console.error('Erro ao copiar Regex: ', err);
    });
}

function copiarProcessador2(btn, event) {
    // Encontra o elemento pai do botão clicado
    var parentDiv = btn.parentNode;

    // Seleciona o texto dentro do span dentro do elemento pai
    var regexExpression2 = parentDiv.querySelector('.regex-expression2').innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(regexExpression2).then(function() {
        // Mostrar mensagem próxima ao cursor do mouse
        showTooltip('Copiado', event);
    }).catch(function(err) {
        // Caso ocorra algum erro
        console.error('Erro ao copiar Regex: ', err);
    });
}

// Função para mostrar a caixa de mensagem
function showTooltip(message, event) {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerText = message;
    tooltip.style.display = "block";
    tooltip.style.top = (event.clientY + 10) + "px";
    tooltip.style.left = (event.clientX + 10) + "px";
  
    // Oculta a caixa de mensagem após alguns segundos
    setTimeout(function() {
      tooltip.style.display = "none";
    }, 600);
  }
  