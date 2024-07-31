const listaDeBotoes = document.querySelectorAll('button'); //seleciona todos os elementos button

//função para ser usada com os botões
 function votando(){
    listaDeBotoes.forEach((botao, index)=>{
        botao.addEventListener('click', () => {
            console.log(`vc clicou  no botão ${index + 1}`);

            processarBotao(index + 1)
        });
    });
 }

 function processarBotao(valor) {
    // Estrutura condicional para verificar o valor
    if (valor === 1) {
        function criarElemento(){
            const novaDiv = document.createElement('div');
            novaDiv.innerHTML = `
            <h2> criando aqui </>
            `
            const tela = document.getElementById('tela');
            tela.appendChild(novaDiv);
        };
    } else if (valor === 2) {
        console.log('Você clicou no Botão 2');
    } else if (valor === 3) {
        console.log('Você clicou no Botão 3');
    } else {
        console.log('Botão desconhecido');
    }
}
 criarElemento();
 votando();