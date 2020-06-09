var visor = document.getElementById("visor");

function limpaVisor() {
    visor.innerHTML = '';
}

function apagarUltimoCaracter() {
    let apagar = visor.innerHTML;
    visor.innerHTML = apagar.substring(0, apagar.length-1);
}

function obterNumero(num) {
    /* Poderia ter passado o value invés do id */
    n = parseFloat(num)
    let numero = 0;
    numero += n;
    visor.innerHTML += numero;
}

function obterOperacao(operacao) {
    switch(operacao) {
        case '.':
            visor.innerHTML += '.';
            break
        case '+':
            visor.innerHTML += '+';
            break;
        case '-':
            visor.innerHTML += '-';
            break;
        case '*':
            visor.innerHTML += '*';
            break;
        case '/':
            visor.innerHTML += '/';
            break;
        case '%':
            visor.innerHTML += '%';
            break;
    }
}

function calcular() {
    let conta = visor.innerHTML;
    resultado = eval(conta);
    visor.innerHTML = resultado;

    /* Função eval não possui porcentagem */
    let operacaoPorcentagem = conta.indexOf("%") > -1;
    if(operacaoPorcentagem == true) {
        let numeros = conta.split('%', 2);
        let resultado = parseFloat(numeros[0])*(parseFloat(numeros[1]/100));
        visor.innerHTML = resultado;
    }

/*     
    let operacaoSoma = conta.indexOf("+") > -1;
    let operacaoSubtracao = conta.indexOf("-") > -1;
    let operacaoMultiplicacao = conta.indexOf("*") > -1;
    let operacaoDivisao = conta.indexOf("/") > -1;
    let operacaoPorcentagem = conta.indexOf("%") > -1;
    if(operacaoSoma == true){
        let numeros = conta.split('+', 2);
        let resultado = parseFloat(numeros[0])+parseFloat(numeros[1]);
        visor.innerHTML = resultado;
    } else if(operacaoSubtracao == true) {
        let numeros = conta.split('-', 2);
        let resultado = parseFloat(numeros[0])-parseFloat(numeros[1]);
        visor.innerHTML = resultado;
    } else if(operacaoMultiplicacao == true) {
        let numeros = conta.split('*', 2);
        let resultado = parseFloat(numeros[0])*parseFloat(numeros[1]);
        visor.innerHTML = resultado;
    } else if(operacaoDivisao == true) {
        let numeros = conta.split('/', 2);
        let resultado = parseFloat(numeros[0])/parseFloat(numeros[1]);
        visor.innerHTML = resultado;
    } else if(operacaoPorcentagem == true) {
        let numeros = conta.split('%', 2);
        let resultado = parseFloat(numeros[0])*(parseFloat(numeros[1]/100));
        visor.innerHTML = resultado;
    } 
*/
}
