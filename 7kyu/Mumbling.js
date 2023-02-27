/**
 * This time no story, no theory. The examples below show you how to write function accum:
 *
 * Examples:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 *
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

// function accum(s) {
//   const res = [];
//   const lowerStr = s.toLowerCase();

//   for (let i = 0; i < lowerStr.length; i++) {
//     let str = lowerStr[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       str += lowerStr[i];
//     }
//     res.push(str);
//   }

//   return res.join("-");
// }

const accum = (str) =>
  str
    .toUpperCase()
    .split("")
    .map((char, idx) => char + char.toLowerCase().repeat(idx))
    .join("-");

// console.log(accum("cwAt"));
