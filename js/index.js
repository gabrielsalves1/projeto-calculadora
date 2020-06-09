/* function ligar() {
    

    if(visor.innerText == "Pressione o botão ON") {
        visor.innerHTML = "ON";
    } else if(visor.innerHTML == "ON"){
        visor.innerHTML = "OFF";
    }
} */
var visor = document.getElementById("visor");

function limpaVisor() {
    visor.innerHTML = "";
}

function apagarUltimo() {
    let apagar = visor.innerHTML;
    visor.innerHTML = apagar.substring(0, apagar.length-1);
}

function obterNumero(num) {
/*     if(visor.innerHTML == "ON") {
        limpaVisor();
    } else if (visor.innerHTML == "OFF"){
        visor.innerHTML = "Pressione o botão ON";
    } else if (visor.innerHTML == "Pressione o botão ON" || visor.innerText == "Pressione o botão ON") {
        visor.innerHTML = "Pressione o botão ON";
    } */
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
    }
}

function calcular() {
    let conta = visor.innerHTML;
    let operacaoSoma = conta.indexOf("+") > -1;
    let operacaoSubtracao = conta.indexOf("-") > -1;
    let operacaoMultiplicacao = conta.indexOf("*") > -1;
    let operacaoDivisao = conta.indexOf("/") > -1;
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
    }
}    
