/*Ejercicio Numero 415 de Leetcode */

var addStrings = function(num1, num2) {
    
    //6 meses después, volví e implemente este código pero ahora en js
    let a, b, digito1, digito2, suma, i, resultado, reverso, sobra
    
    resultado = [];
    reverso = ""
    a = num1.length -1
    b = num2.length -1
    sobra = 0
    
    while(a >= 0 || b>= 0 || sobra)
    {
        digito1 = (a>=0) ? Number(num1[a]) : 0
        digito2 = (b>=0) ? Number(num2[b]) : 0
        suma = digito1+digito2+sobra
        sobra = Math.floor(suma/10)
        
        resultado.push(String(suma%10));
        
        a--; b--;
    }
    
    for(i = resultado.length - 1; i >= 0; i--)
    {
        reverso += resultado[i];
    }
    
    return reverso
};