const listaDeBotoes = document.querySelectorAll('button'); //seleciona todos os elementos button

//função para ser usada com os botões
 function votando(){
    listaDeBotoes.forEach((botao, index)=>{
        botao.addEventListener('click', () => {
            console.log(`vc clicou  no botão ${index + 1}`);
        });
    });
 }

 votando();