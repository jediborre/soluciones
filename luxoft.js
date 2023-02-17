let number;
let ans = {},
    ans_2 = {};
let numbers = [1, 2, 1, 0, 2, 7, 3, 4, 9, 2, 4]

for (let n = 0; n < numbers.length; n++) {
    number = numbers[n].toString();
    if (!(number in ans))
        ans[number] = 0;
    ans[number] = ans[number] + 1;
}

numbers.reduce((acc, number) => {
    if (!(number in acc))
        acc[number] = 0;
    acc[number] = acc[number] + 1;
    return acc;
}, ans_2);

// Preguntas 
// Promises
// LifeCycle React
// var let const
// como se define la cookie
// $ vs $$
// abstract class vs interface
// patrones de diseño
// Como se llama a la database mediante PHP
// database_engines
// how session works
// how to create a session in code
// Que version php has trabajado
// Que tiene la version 7 de php
// como se define patron singleton
// principio solid en php