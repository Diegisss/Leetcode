/*Ejercicio Numero 3 de Leetcode */

var lengthOfLongestSubstring = function(s) {
    const caracteres= new Set();
    let der, izq, maximo
    izq = maximo = der = 0
    
    for(der; der<s.length; der++)
    {
        
        while (caracteres.has(s[der])) {
            caracteres.delete(s[izq]);
            izq++;
        }
        
        caracteres.add(s[der])
        
        if ((der-izq +1) > maximo) {maximo = (der-izq+1)}
        
    }
    return maximo 
    
};