# -*- coding: utf-8 -*-
"""
Creado on Dic 19 2022
parentesisBalanceados.py

 * Imprime todas las combinaciones posibles de paréntesis balanceados, la función recibirá un número entero de la cantidad de paréntesis balanceados requeridos
 * Ex:
 * parentesisBalanceados(1) -> {}
 * parentesisBa lanceados(2) -> {}{}, {{}}
 * parentesisBalanceados(3) -> {}{}{}, {{}{}}, {}{{}}, {{}}{}, {{{}}}
 * parentesisBalanceados(4) -> {}{}{}{}, {{}{}{}}, {}{}{{}}, {}{{}}{},
 * 							{{}}{}{}, {}{{}{}}, {{}{}}{}, {{}}{{}},
 * 							{{}{{}}}, {{{}}{}}. {{{{}}}}
 *
 * @param {n} number - número entero de la cantidad de paréntesis balanceados requeridos
 * @returns {string} The result of applying the look-and-say sequence to the input.
 *
"""
def parentesisBalanceados(n: int) -> str:
    resultado = []
    # n es el número de paréntesis balanceados requeridos.
    # a es una cadena que almacena la combinación actual de paréntesis balanceados. Cada vez que se llama a la función, se añade un nuevo paréntesis a la cadena.
    # b es una variable que lleva una cuenta del número de paréntesis abiertos que no han sido cerrados. Cada vez que se añade un paréntesis abierto a la cadena, se incrementa en 1, y cada vez que se añade un paréntesis cerrado, se decrementa en 1.
    def parentesis_balanceados(p: int, a: str = '', b: int = 0):
        #Cuando b es igual a 0 y la longitud de la cadena a es igual a 2*n (es decir, se han añadido el número correcto de paréntesis), se imprime la combinación actual de paréntesis balanceados.
        if b == 0 and len(a) == 2*p:
            resultado.append(a)
        #En caso contrario, se llama de nuevo a la función con un paréntesis cerrado si b es mayor que 0, y con un paréntesis abierto si la longitud de la cadena a es menor que 2*n.
        else:
            if b > 0:
                parentesis_balanceados(p, a+'}', b-1)
            if len(a) < 2*p:
                parentesis_balanceados(p, a+'{', b+1)
    parentesis_balanceados(n)
    return ', '.join(resultado)

print(1, '->' ,parentesisBalanceados(1))
print(2, '->' ,parentesisBalanceados(2))
print(3, '->' ,parentesisBalanceados(3))
print(4, '->' ,parentesisBalanceados(4))