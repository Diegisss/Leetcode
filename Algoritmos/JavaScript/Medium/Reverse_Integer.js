/*Ejercicio Numero 7 de Leetcode */

var reverse = function(x) {
    let reversa = 0;
    
    while(x !==0 )
    {
        reversa = (x%10) + 10 * reversa;
        x = Math.trunc(x/10)
    }
    
    if (reversa < -(2 ** 31) || reversa > 2 ** 31 - 1) {
    return 0;
}
    
    return reversa;
};