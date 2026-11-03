/*Ejercicio Numero 29 de Leetcode */

/*El primer nivel Medium que más me ha hecho pensar JAJAJA */

var divide = function(dividend, divisor) {
    
    let contador, temporal, negativo1, negativo2, resultado, nuevo, min, max
    
    resultado = 0;
    min = -2147483648
    max = 2147483647
    negativo1 = negativo2 = false
    
    if (dividend === min  && divisor===-1) {
        return max;
    }
    if (dividend < 0)
    {dividend = -dividend; negativo1 = true}
    if (divisor < 0) {divisor = -divisor; negativo2 = true}    
    /*for(i=divisor; i<=dividend; i += divisor)*/
    while(dividend >= divisor)
    {
        temporal = divisor
        contador = 0
        
        while((temporal <<1) > 0 && dividend >= (temporal <<1))
        {
            temporal <<= 1; //6,12,24,48,96
            contador++; // 1,2,3,4,5
            
        }
        nuevo = 1<<contador
        dividend = dividend - temporal
        resultado += nuevo
    }
    
    
    /*if((negativo1 === true && negativo2 === true) || (negativo1 === false && negativo2 === false)) {return contador}*/
    if (negativo1 === negativo2) {return resultado}
    else {return resultado * -1}
};