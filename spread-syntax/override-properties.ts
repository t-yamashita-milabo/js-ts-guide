const alice = {
  id: 0,
  name: "alice",
};

const bob = { ...alice, name: "bob" };

console.log(alice); // { id: 0, name: 'alice' }
console.log(bob); // { id: 0, name: 'bob' }

export {};
