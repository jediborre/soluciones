const ages = [12,13,45,32,34,23,45,12,34,56,23,12,11,18,19];
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