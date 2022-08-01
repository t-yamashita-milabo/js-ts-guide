const a = [
  [1, 2, 3],
  [4, 5, 6],
];

const b = [...a];
b[0][0] = 10000;

console.log(a); // [ [ 10000, 2, 3 ], [ 4, 5, 6 ] ]
console.log(b); // [ [ 10000, 2, 3 ], [ 4, 5, 6 ] ]

export {};