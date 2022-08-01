const a = [1, 2, 3, 4, 5];

const b = [...a];

console.log(a); // [ 1, 2, 3, 4, 5 ]
console.log(b); // [ 1, 2, 3, 4, 5 ]

b[0] = 10000;

console.log(a); // [ 1, 2, 3, 4, 5 ]
console.log(b); // [ 10000, 2, 3, 4, 5 ]

export {};
