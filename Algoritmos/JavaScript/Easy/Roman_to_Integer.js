/*Ejercicio Numero 13 de Leetcode */

function romano(valor) {
    switch (valor) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    }
}
var romanToInt = function (s) {
    let i, actual, siguiente, resultado;
    resultado = 0
    for (i = 0; i < s.length; i++) {
        actual = romano(s[i])
        siguiente = romano(s[i + 1])


        if (actual < siguiente) {
            resultado -= actual
        }
        else {
            resultado += actual
        }

    }
    return resultado
};