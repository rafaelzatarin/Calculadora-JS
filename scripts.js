// Declaração de Variaveis
let n1 = '';
let n2 = '';
let res = '';
let oper = '';
let valores = document.getElementById('result')
valores.value = '0';
// Variavel utilizada para calcular as operações
let calc = {
    somar: function(n1, n2) {
        return n1 + n2;
    },
    subtrair: function(n1, n2) {
        return n1 - n2;
    },
    multiplicar: function(n1, n2) {
        return n1 * n2;
    },
    dividir: function(n1, n2) {
        return n1 / n2;
    }
}
// Apresentação do histórico
let histRet = document.querySelector('div#resHist')
let lista = document.getElementById('retorno')


function defOper(vlr) {
    calcular();
    histRet.style.visibility = 'hidden';
    oper = vlr;
}

function addNum(num) {
    if (oper === ''){
        n1 = obterNum(num, n1);
        histRet.style.visibility = 'hidden';
    } else {
        n2 = obterNum(num, n2);
        histRet.style.visibility = 'hidden';
    }
}

function obterNum(numNovo, numAtual) {
    if (numAtual.length == 10 || (numNovo === '.' && numAtual.indexOf('.') >= 0)) {
        return;
    }
    if (numNovo === '.' && (valores.value === '0' || numAtual === '')) {
        numAtual = '0';
    }
    valores.value = numAtual + numNovo;
    return valores.value;
}

function limpar() {
    n1 = '';
    n2 = '';
    res = '';  
    valores.value = '0';
}

function calcular() {
    if (n1 === '' || n2 === '' || oper === '') {
        return
    }
    var res = '';
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (oper) {
        case '+':
            res = calc.somar(n1, n2);
            break;
        case '-' :
            res = calc.subtrair(n1, n2);
            break;
        case '*' :
            res = calc.multiplicar(n1, n2);
            break;
        case '/' :
            res = calc.dividir(n1, n2);
            break;     
    }   
    res = res.toString();
    valores.value = res.length <= 10 ? res : res.substr(0, 10);
    n1 = valores.value;
    n2 = '';
    oper = '';
}

function historico() {
    if (histRet.style.visibility === 'hidden') {
        histRet.style.visibility = 'visible';
        let results = document.createElement('option');
        results.text = `Valor Total: ${n1}`;
        lista.appendChild(results);
    } else {
        histRet.style.visibility = 'hidden';
    }
}