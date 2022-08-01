const a: { name: string }[] = [
  { name: "alice" },
  { name: "bob" },
  { name: "eve" },
];

const b = [...a];

b[0].name = "ALICE";

console.log(a); // [ { name: 'ALICE' }, { name: 'bob' }, { name: 'eve' } ]
console.log(b); // [ { name: 'ALICE' }, { name: 'bob' }, { name: 'eve' } ]

export {};
