const dTb = document.querySelector(".dTb");
const botdTb = document.querySelector(".botdTb");
const resultBin = document.querySelector(".resultBin");
const bTd = document.querySelector(".bTd");
const botbTd = document.querySelector(".botbTd");
const resultDec = document.querySelector(".resultDec");

function reverseString (str) {
    return str.split("").reverse().join("");
}

botdTb.onclick = function () {
    let result = '';
    let resto = '';
    let valorDecimal = Number(dTb.value);
    if (valorDecimal > 0) {
        while (valorDecimal > 0) {
            resto = String(valorDecimal % 2);
            valorDecimal = parseInt(valorDecimal / 2);
            result = resto + result;
        }
        resultBin.innerHTML = result;
    } else {
        alert('Insira valor de maior que ZERO');
    }
};

botbTd.onclick = function () {
    let test = bTd.value;
    for (let x = 0; x < test.length; x++) {
        if (test[x] == '0' || test[x] == '1') {
            let valorBinario = bTd.value;
            let binCalculo = reverseString(valorBinario);
            let resultado = 0;
            for (let i = 0; i < binCalculo.length; i++) {
                let decimal = Number(binCalculo[i]) * 2 ** i;
                resultado += decimal;
            }
            resultDec.innerHTML = resultado;
        } else {
            bTd.value = '';
            resultDec.innerHTML = 'somente 0 e 1';
        }
    }
};