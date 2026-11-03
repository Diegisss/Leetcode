/*Ejercicio Numero 20 de Leetcode*/

var isValid = function(s) {
    let pila = [];
    let delimitadores = {')':'(','}':'{',']':'['};

    for(let char of s)
    {
        if(!delimitadores[char]){
            pila.push(char);
        }
        else if(pila.pop() !== delimitadores[char]){
            return false;
        }
    }
    return pila.length === 0;
};