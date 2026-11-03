/*Ejercicio Numero 412 de Leetcode */

var fizzBuzz = function(n) {
    let i, valores 
    valores = []
    i = 1;
    for(i; i<=n; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            valores[i-1] = "FizzBuzz"
        }
        else if(i % 3 === 0)
        {
            valores[i-1] = "Fizz"
        }
        else if(i % 5 === 0)
        {
            valores[i-1] = "Buzz"
        }
        else
        {
            valores[i-1] = String(i)
        }
    }
    return valores
};