/**
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
 *
 * Note: a and b are not ordered!
 *
 * Examples (a, b) --> output (explanation)
 * (1, 0) --> 1 (1 + 0 = 1)
 * (1, 2) --> 3 (1 + 2 = 3)
 * (0, 1) --> 1 (0 + 1 = 1)
 * (1, 1) --> 1 (1 since both are same)
 * (-1, 0) --> -1 (-1 + 0 = -1)
 * (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 * Your function should only return a number, not the explanation about how you get that number.
 */

function getSum(a, b) {
  let sum = 0;
  if (a == b) {
    return a;
  }
  if (a > b) {
    for (let i = b; i < a + 1; i++) {
      sum += i;
    }
  }
  if (a < b) {
    for (let i = a; i < b + 1; i++) {
      sum += i;
    }
  }
  return sum;
}

// const getSum = (a, b) => ((Math.max(a, b) - Math.min(a, b) + 1) * (Math.max(a, b) + Math.min(a, b))) / 2;

// console.log(getSum(2, 5));
