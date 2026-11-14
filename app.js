let numeroEscolhido = Number(prompt('Escolha um número para mutiplicar:'));
alert('Clique no botão "Ativar" na página');

function tabuada() {
    for (let c = 1; c <= 10; c++) {
        let resultado = numeroEscolhido * c;
        console.log(`${numeroEscolhido} x ${c} = ${resultado} `);
    }
}