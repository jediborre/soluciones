""""
super_digit.py
Dic 19 2022

Super Dígito
Dado un número, necesitamos encontrar el súper dígito de ese número.

Definimos súper dígito de un número como:

• Si tiene sólo un dígito entonces el mismo es su súper dígito.
• Si tiene más de un dígito entonces el súper dígito es la suma de todos los dlgitos hasta que sólo quede 1 dígito ejemplo:

super_digit (9875)  = super_digit(9+8+7+5)
					= super_digit(29)
					= super_digit(2+9)
					= super_digit(11)
					= super_digit(1+1)
					= super_digit(2)
					= .2
Para este problema recibes 2 números, y debes calcular el súper dígito de el número resultante en la concatenación de n veces por ejemplo:

148 3
Entonces el número del que queremos saber el súper dígito es 148148148
Resultado
3

Explicación super_digit(P)  = super_digit(148148148)
							= super_digit(1+4+8+1+4+8+1+4+8)
							= super_digit(39)
							= super_digit(3+9)
							= super_digit(12)
							= super_digit(1+2)
							= super_digit(3)
							= 3.
* @param {int} p - Es el número a calcular su súper dígito.
* @param {int} n - Es el número de veces que se debe concatenar p.
* @returns {int} - El súper dígito de p.
*
"""
def super_digit(p: int, n: int) -> int:
    # Calcular el número resultante de concatenar p n veces
    num = int(str(p) * n)

    # Calcular la suma de todos los dígitos del número
    sum_digits = sum(int(d) for d in str(num))

    # Si la suma tiene más de un dígito, repita los pasos anteriores
    while sum_digits >= 10:
        sum_digits = sum(int(d) for d in str(sum_digits))

    # Devolver el súper dígito
    return sum_digits

print(super_digit(148, 3))
print(super_digit(9875, 1))