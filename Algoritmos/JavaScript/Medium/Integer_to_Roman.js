/*Ejercicio Numero 12 de Leetcode */

function romano(valor){
     switch(valor){
         case 1000: return 'M';
         case 900: return 'CM';
         case 500: return 'D';
         case 400: return 'CD';
         case 100: return 'C';
         case 90: return 'XC';
         case 50: return 'L';
         case 40: return 'XL';
         case 10: return 'X';
         case 9: return 'IX';
         case 5: return 'V';
         case 4: return 'IV';
         case 1: return 'I';
     }
 }
var intToRoman = function(num) {
    let resultado,i,valores;
    resultado = "";
    valores = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    for(i = 0; i<valores.length; i++)
    {
        while(num >= valores[i])
        {
            resultado += romano(valores[i]);
            num = num - valores[i];
        }
    }
    return resultado 
};