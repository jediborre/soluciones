// Prueba tecnica para Luxoft

// Otras preguntas
/*
1.-Explain the Event loop 2.-What is a promise? 3.-Explain Hoisting
What do hoisting and closure mean? What "http" stands for?
Promises, closures, scope, hoisting, ES6 new features Prototype.
*/
let ages = [12,13,45,32,34,23,45,12,34,56,23,12,11,18,19];
let result = {
  minors: 0,
  adults: 0,
  group: []
}


//Output
/*
  {
    minors: 2, // num of minors 
    adults: 6, // num of adults
    group:[
          // Ex. {12: 3}, {13: 1}
    ]
  }
*/
let age, n, tmp = {};
for (n = 0; n < ages.length; n++) {
  age = ages[n];
  if (age >= 18)
    result.adults++;
  else
    result.minors++;
  if (!tmp.hasOwnProperty(age))
    tmp[age] = 0;
  tmp[age]++;
}
let edad, cuentas_veces, tmp_2;
for (edad in tmp) {
    tmp_2 = {};
    cuentas_veces = tmp[edad];
    tmp_2[edad] = cuentas_veces;
    result.group.push(tmp_2);
}
console.log(result);

//Simplificado

//Output
/*
  {
    minors: 2,
    adults: 6,
    group:[
      {12: 3}, {13: 1}, ...
    ]
  }
*/

ages = [12,13,45,32,34,23,45,12,34,56,23,12,11,18,19];
result = {
  minors: 0,
  adults: 0,
  group: []
}

result.minors = ages.filter(age => age < 18).length;
result.adults = ages.filter(age => age >= 18).length;
result.group = ages.map(age => { 
  ages.reduce((acc, age) => {
    if (!acc.hasOwnProperty(age))
      acc[age] = 0;
    acc[age]++;
    return acc;
  }
  , {})
});
