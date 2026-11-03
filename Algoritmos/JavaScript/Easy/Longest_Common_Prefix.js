/*Ejercicio Numero 14 de Leetcode */

var longestCommonPrefix = function(strs) {
    
    let letra, vacio, cadena;
    letra = vacio = cadena = ""
    
    for(let i = 0; i<strs[0].length; i++)
    {
        letra = strs[0][i]
        for(let j = 1; j<strs.length; j++)
        {
            if(letra!==strs[j][i])
            {
                return cadena;
            }
        }
        cadena += letra
    }
    return cadena
};