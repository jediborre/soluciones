/*
Your task is to create a function that will take an integer and return the result of the look-and-say function on that integer. This should be a general function that takes as input any positive integer, and returns an integer; inputs are not limited to the sequence which starts with "1".

Conway's Look-and-say sequence goes like this:

Start with a number.
Look at the number, and group consecutive digits together.
For each digit group, say the number of digits, then the digit itself.
Sample inputs and outputs:

1 is read as "one 1" => 11
11 is read as "two 1s" => 21
21 is read as "one 2, then one 1" => 1211
9000 is read as "one 9, then 3 0s" => 1930
222222222222 is read as "twelve 2s" => 122

*/

/**
 * Compresses a number by counting the occurrences of each number.
 *
 * @param {n} number - The number to encode with the "look and say" algorithm.
 * @returns {number} The result of applying the look-and-say sequence to the input.
*/
const compressNumber = number => {
    let count = 1;
    let result = '';
    let lastDigit = number % 10;
    let rest = Math.floor(number / 10);
    while (rest > 0) {
        const digit = rest % 10;
        if (digit === lastDigit)
            count++;
        else {
            result = `${count}${lastDigit}${result}`;
            count = 1;
            lastDigit = digit;
        }
        rest = Math.floor(rest / 10);
    }
    result = `${count}${lastDigit}${result}`;
    return parseInt(result, 10);
};