function ligar() {
    var visor = document.getElementById("visor");

    if(visor.innerHTML == "ON") {
        visor.innerHTML = "OFF";
    } else {
        visor.innerHTML = "ON";
        
    }
}

function calcular(num) {
    n = parseInt(num)
    let numero = 0;
    numero += n;
    visor.innerHTML += numero;
}