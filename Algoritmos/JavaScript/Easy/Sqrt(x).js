/*Ejercicio Numero 69 de Leetcode */

var mySqrt = function(x) {
    let inicio, fin, mitad, posible
    
    inicio = 0
    fin = x
    posible = 0
    
    while(inicio <= fin)
    {
        mitad = Math.floor((inicio + fin)/2)
        if(mitad * mitad === x)
        {
            return mitad
        }
        else if(mitad * mitad < x)
        {
            posible = mitad
            inicio = mitad + 1
        }
        else if (mitad * mitad > x)
        {
            fin = mitad - 1
        }
    }
    return posible
};