#Ejercicio Numero 415 de leetcode, si deseas ejecutarlo en visual studio code, necesitas importar sys

class Solution:
    sys.set_int_max_str_digits(10000)
    def addStrings(self, num1: str, num2: str) -> str:
        regresar = []
        resultado=0
        a = len(num1)-1
        b = len(num2)-1
        while(a >= 0 or b >= 0 or resultado):
            digito1 = int(num1[a]) if a>=0 else 0
            digito2 = int(num2[b]) if b>=0 else 0
            suma = digito1+digito2+resultado
            resultado = suma // 10

            regresar.append(str(suma%10))
            a -= 1; b -=1
        return "".join(regresar[::-1])