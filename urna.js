// Seleciona todos os elementos button
const listaDeBotoes = document.querySelectorAll('button');  

// Função para ser usada com os botões
function votando(){
    listaDeBotoes.forEach((botao, index) => { // Percorre a lista de botões
        // Adicionar um evento de click no botão
        botao.addEventListener('click', () => { 
            // Mostrar o resultado do click no console
            console.log(`Você clicou no botão ${index + 1}`);
            processarBotao(index + 1);
        });
    });
}

function criarElemento(imagemSrc = '') {
    const tela = document.getElementById('tela');
    tela.innerHTML = ''; // Limpa o conteúdo atual antes de adicionar algo novo

    if (imagemSrc) {
        const novaDiv = document.createElement('div'); 
        novaDiv.innerHTML = `
            <div></div>
            <img src="${imagemSrc}">
        `;
        
        novaDiv.style.width = '650px';
        novaDiv.style.height = '600px';
        novaDiv.style.backgroundColor = 'white';
        novaDiv.style.border = 'solid 1px black';

        tela.appendChild(novaDiv);
    }
}

function processarBotao(valor) {
    switch (valor) {
        case 1:
            criarElemento('imagens/Lula.png');
            break;
        case 2:
            criarElemento('imagens/bozzo.png');
            break;
        case 3:
            criarElemento('imagens/Lula.png');
            break;
        case 4:
            criarElemento('imagens/bozzo.png');
            break;
        case 5:
            criarElemento('imagens/Lula.png');
            break;
        case 6:
            criarElemento('imagens/bozzo.png');
            break;
        case 7:
            criarElemento('imagens/Lula.png');
            break;
        case 8:
            criarElemento('imagens/bozzo.png');
            break;
        case 9:
            criarElemento('imagens/Lula.png');
            break;
        case 10:
            criarElemento('imagens/bozzo.png');
            break;
        case 11:
            criarElemento('imagens/branco.png');
            break;
        // Continue com os demais cases conforme necessário
        case 12:
            criarElemento(''); // Limpa o conteúdo da div
            break;
        case 13:
            criarElemento('imagens/fim.png');
    }
}

votando();
