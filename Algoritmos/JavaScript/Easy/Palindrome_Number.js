/*Ejercicio Numero 9 de Leetcode*/

var isPalindrome = function(x) {
    let reversa = 0;
    if (x < 0 || (x%10 == 0 && x !==0))
    {
        return false;
    }
    while(x>reversa)
    {
        reversa = reversa * 10 + (x%10);
        x = Math.trunc(x/10)
    }
    
    return x === reversa || x === Math.trunc(reversa/10);
};