/*Ejercicio Numero 4 de Leetcode */

/*El primer nivel dificil dentro de la categoria dificil :)*/

function limite(arreglo, indices)
 {
     if(indices < 0) return -Infinity
     if(indices >= arreglo.length) return Infinity
     
     return arreglo[indices]
 }
 
var findMedianSortedArrays = function(nums1, nums2) {
    let cantidad, izq, peque, grande, inicio, fin, parti1, parti2, izqP, izqG, derP, derG, par = false
    
    if (nums1.length > nums2.length)
     {peque = nums2; grande = nums1}
    
    else {peque = nums1; grande = nums2}
    
    cantidad = peque.length + grande.length   
    
    /*if(cantidad % 2===0)
     {
        izq = cantidad/2
        //der = izq
        par = true
     }
    else
     {
        izq = Math.floor(cantidad/2) + 1
        //der = cantidad - izq
     }*/
     
     par = (cantidad % 2 === 0)
     
     izq = par ? cantidad/2 : Math.floor(cantidad/2) +1
    
    inicio = 0
    fin = peque.length
    
    while(inicio <= fin)
     {
       parti1 = Math.floor((inicio+fin)/2)
       parti2 = izq - parti1
       
       izqP = limite(peque, parti1 - 1)
       izqG = limite(grande, parti2 - 1)
       
       derP = limite(peque, parti1)
       derG = limite(grande, parti2)
       
       if(izqP <= derG && izqG <= derP)
       {
           //aquí calculo la mediana
           return par ? (Math.max(izqP, izqG) + Math.min(derP, derG))/2 : Math.max(izqP, izqG)
           /*if(par)
           {
               return (Math.max(izqP, izqG) +Math.min(derP, derG))/2    
           }
           else
           {
               return Math.max(izqP, izqG)
           }*/
       }
       else
       {
           if(izqP > derG)
           {
               fin = parti1 - 1
           }
           else
           {
               inicio = parti1 + 1
           }
       }
     }
    
    return 0
};