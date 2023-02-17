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