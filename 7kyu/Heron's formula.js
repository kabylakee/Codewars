/**
 * Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:
 
Output should have 2 digits precision.
 */

function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

// console.log(heron(3, 4, 5));
