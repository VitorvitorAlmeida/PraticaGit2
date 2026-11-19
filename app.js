let numeroEscolhido = Number(prompt('Escolha um número para mutiplicar:'));
console.log('Clique no botão "Ativar" na página');//mensagem no console

function tabuada() {
    for (let c = 1; c <= 10; c++) {
        let resultado = numeroEscolhido * c;
        console.log(`${numeroEscolhido} x ${c} = ${resultado} `);
    }
}