function copyXPath(btn, event) {
    // Encontra o elemento pai do botão clicado
    var parentDiv = btn.parentNode;

    // Seleciona o texto dentro do span dentro do elemento pai
    var xpathExpression = parentDiv.querySelector('.xpath-expression').innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(xpathExpression).then(function() {
        // Mostrar mensagem próxima ao cursor do mouse
        showTooltip('Conteúdo copiado', event);
    }).catch(function(err) {
        // Caso ocorra algum erro
        console.error('Erro ao copiar XPath: ', err);
    });
}

function copyRegex(btn, event) {
    // Encontra o elemento pai do botão clicado
    var parentDiv = btn.parentNode;

    // Seleciona o texto dentro do span dentro do elemento pai
    var regexExpression = parentDiv.querySelector('.regex-expression').innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(regexExpression).then(function() {
        // Mostrar mensagem próxima ao cursor do mouse
        showTooltip('Conteúdo copiado', event);
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
    }, 2000);
  }
  