/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally,
 * if the number is negative, return 0 (for languages that do have them).
 *
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 */

// function solution(number) {
//   if (number < 0) {
//     return 0;
//   }
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       count = count + i;
//     }
//   }
//   return count;
// }

function solution(number) {
  return number > 0
    ? Object.keys([...new Array(number)])
        .filter((num) => num % 3 === 0 || num % 5 === 0)
        .reduce((acc, num) => acc + +num, 0)
    : 0;
}

// console.log(solution(10));
