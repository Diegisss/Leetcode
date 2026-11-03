/*Ejercicio Numero 5 de Leetcode*/

function expander(izq, der, s)
 {
     let inicio, longitud;
     
     while(der<s.length && izq>= 0 && s[izq] === s[der])
     {
         der++
         izq--
     }
     inicio = izq +1
     longitud= der-izq-1
     return [inicio, longitud]
 }
var longestPalindrome = function(s) {
    let izq, der, centro, cantidad, par, impar, actual, inicio, longitud 
    centro = 0
    
    cantidad = s.length
    inicio = 0
    longitud = 1
    
    for(centro; centro<cantidad; centro++)
    {
        par = expander(centro, centro + 1, s)
        impar = expander(centro, centro, s)
        
        actual = par[1]> impar[1] ? par : impar
        if(actual[1] > longitud)
        {
            inicio = actual[0];
            longitud = actual[1];
        }
    }
    
    return s.substring(inicio, inicio + longitud);
};

