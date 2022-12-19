# -*- coding: utf-8 -*-
"""
 * imprime_n_substring.py
 * Dic 19 2022
 * 
 * Dada una cadena. Ordena todas las posibles substrings en orden alfabético e imprime el carácter dado después de concatenar las substrings.
 * Ex:
 *	imprimeNSubstring ("dbac", 3) -> El carácter es C
`*  Explicación:
 *	Las susbstrings son -> a, ac, b, ba, bac, c, d, db, dba, dbac
 *	Después de concatenar es -> aacbbabaccddbdbadbac Por lo tanto quien está en posición 3 es C
 *
 * @param {str} s - Es la cadena de entrada.
 * @param {int} n - Es el índice del carácter a imprimir después de concatenar todas las subcadenas.
 * @returns {str} - El carácter en la posición n de la cadena resultante.
"""
def imprime_n_substring(s: str, n: int):
	#La función primero verifica si n es menor que la longitud de s. Si es así, simplemente devuelve el carácter en la posición n de s.
    if n < len(s):
        return s[n]

    result = ''
    #En caso contrario, se generan todas las subcadenas de s y se concatenan en una cadena resultante.
    for i in range(len(s)):
        for j in range(i+1, len(s)+1):
            result += s[i:j]

    # se llama de nuevo a la función con la cadena resultante y el índice n. Esta secuencia de llamadas recursivas continúa hasta que se alcanza un caso base, en el que n es menor que la longitud de s, y se devuelve el carácter en la posición n de s.
    return imprime_n_substring(result, n)


print(imprime_n_substring('dbac', 3))