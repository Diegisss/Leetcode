/*Ejercicio Numero 6 de Leetcode*/

var convert = function(s, numRows) {
    let contador, direccion, filas, i
    direccion = 1
    contador  = i = 0;
    if(numRows == 1 || s.length <= numRows) return s;
    
    filas = Array(numRows).fill("");
    
    for(i; i<s.length; i++)
    {
        filas[contador] += s[i]
        
        direccion = (contador== numRows-1) ? -1 : (contador == 0) ? 1 : direccion
        
        contador += direccion
    }
    
    return filas.join("");
    
};