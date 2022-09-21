let resultadoParagrafo = document.getElementById('res');
let resultadoParagrafo2 = document.getElementById('res2')
let operadores = document.getElementById('ope')
const resultadoTexto = document.querySelector('p#resultado')
let tamanho = operadores.textContent
let visor = 0;
let visor2 = 0;
let soma = false;
let divisao1 = false;
let multi = false;
let subtracao = false;
let resultado;
//NUMEROS
function zero() {
    if (tamanho.length == 0) {
        visor = visor*10+0
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+0
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function um() {
    if (tamanho.length == 0) {
        visor = visor*10+1
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+1
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function dois() {
    if (tamanho.length == 0) {
        visor = visor*10+2
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+2
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function tres() {
    if (tamanho.length == 0) {
        visor = visor*10+3
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+3
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function quatro() {
    if (tamanho.length == 0) {
        visor = visor*10+4
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+4
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function cinco() {
    if (tamanho.length == 0) {
        visor = visor*10+5
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+5
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function seis() {
    if (tamanho.length == 0) {
        visor = visor*10+6
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+6
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function sete() {
    if (tamanho.length == 0) {
        visor = visor*10+7
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+7
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function oito() {
    if (tamanho.length == 0) {
        visor = visor*10+8
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+8
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}
function nove() {
    if (tamanho.length == 0) {
        visor = visor*10+9
    return (resultadoParagrafo.innerHTML= visor)
    } else if (soma == true || multi == true || divisao1 == true || subtracao == true){
        visor2 = visor2*10+9
    return (resultadoParagrafo2.innerHTML= visor2)
    }
}

//OPERADORES
function mais() {
        soma = true
        subtracao = false
        multi = false
        divisao1 = false
    tamanho = 1
    return(operadores.innerHTML='+')
}
function multiplicacao() {
    soma = false
    subtracao = false
    multi = true
    divisao1 = false
    tamanho = 1
    return(operadores.innerHTML='*')
}
function divisao() {
    soma = false
    subtracao = false
    multi = false
    divisao1 = true
    tamanho = 1
    return(operadores.innerHTML='/')
}
function menos() {
    soma = false
    subtracao = true
    multi = false
    divisao1 = false
    tamanho = 1
    return(operadores.innerHTML='-')
}
function igual() {
    if (soma == true) {
        resultado = visor + visor2
        resultadoTexto.innerHTML=resultado
    } else if (subtracao == true) {
        resultado = visor - visor2
        resultadoTexto.innerHTML= resultado
    } else if (multi == true){
        resultado = visor * visor2
        resultadoTexto.innerHTML=resultado
    } else if (divisao1 == true) {
        subtracao = false
        soma = false
        multi = false
        resultado = visor / visor2
        resultadoTexto.innerHTML=resultado
    }
}
function limpar() {
    document.location.reload()
}