/*Segundo ejercicio de Leetcode: un poco mas dificil que el primero */

var addTwoNumbers = function (l1, l2) {
    let acarreo, suma, valor, val_l1, val_l2;
    acarreo = suma = 0

    let resultado = new ListNode()
    let actualR = resultado

    while (l1 !== null || l2 !== null || acarreo != 0) {
        val_l1 = (l1 === null) ? 0 : l1.val
        val_l2 = (l2 === null) ? 0 : l2.val

        suma = val_l1 + val_l2 + acarreo
        if (suma > 9) {
            valor = suma % 10
            acarreo = Math.floor(suma / 10)
        } else {
            valor = suma % 10
            acarreo = 0
        }
        actualR.next = new ListNode(valor)
        actualR = actualR.next

        if (l1 !== null) { l1 = l1.next }
        if (l2 !== null) { l2 = l2.next }
    }
    return resultado.next
};