const listaDeBotoes = document.querySelectorAll('button'); //seleciona todos os elementos button

//função para ser usada com os botões
 function votando(){
    listaDeBotoes.forEach((botao, index)=>{ //aqui estou percorrendo a lista
        //Adicionar um evento de click no botão
        botao.addEventListener('click', () => { 
            //mostrar o resultado do click no console
            console.log(`vc clicou  no botão ${index + 1}`);

            processarBotao(index + 1)
        });
    });
 }

 function processarBotao(valor) {
    // Estrutura condicional para verificar o valor
    if (valor === 1) {
        //Função para criar um elemento dentro do HTML
        function criarElemento(){
            const novaDiv = document.createElement('div'); 
            //não esquecer de usar crase
            novaDiv.innerHTML = `
                <div></div>
                
                <img src="imagens/Lula_Molusco.jfif">
            `;
            
            novaDiv.style.width = '650px';
            novaDiv.style.height = '600px';
            novaDiv.style.backgroundColor = 'white'
            novaDiv.style.border = 'solid 1px black'

            if(valor === 12){
                novaDiv.innerHTML = ''
            }
        

            const tela = document.getElementById('tela');
            tela.appendChild(novaDiv);
        };
    } else if (valor === 2) {
        console.log('Você clicou no Botão 2');
    } else if (valor === 3) {
        console.log('Você clicou no Botão 3');
    } else if (valor === 4) {
        console.log('Você clicou no Botão 4');
    } else if (valor === 5) {
        console.log('Você clicou no Botão 5');
    } else if (valor === 6) {
        console.log('Você clicou no Botão 6');
    } else if (valor === 7) {
        console.log('Você clicou no Botão 7');
    } else if (valor === 8) {
        console.log('Você clicou no Botão 8');
    } else if (valor === 9) {
        console.log('Você clicou no Botão 9');
    } else if (valor === 10) {
        console.log('Você clicou no Botão 10');
    } else if (valor === 11) {
        console.log('Você clicou no Botão 11');
    } else if (valor === 12) {
         //Função para criar um elemento dentro do HTML
         function criarElemento(){
            const novaDiv = document.createElement('div'); 
            //não esquecer de usar crase
            novaDiv.innerHTML = `
                
                
            `;
            
            novaDiv.style.width = '650px';
            novaDiv.style.height = '600px';
            novaDiv.style.backgroundColor = 'white'
            novaDiv.style.border = 'solid 1px black'
            const tela = document.getElementById('tela');
            tela.appendChild(novaDiv);
        };
    } else if (valor === 13) {
        console.log('Você clicou no Botão 3');
    } else {
        console.log('Botão desconhecido');
    }
    criarElemento();
}
 
 votando();