/*Ejercicio Numero 258 de Leetcode*/

var addDigits = function(num) {
    if(num === 0) return 0
    return 1 + (num-1) % 9
};