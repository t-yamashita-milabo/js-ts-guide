const alice = {
  id: 0,
  name: "alice",
};

const anotherAlice = { ...alice };
anotherAlice.name = "ALICE";

console.log(alice); // { id: 0, name: 'alice' }
console.log(anotherAlice); // { id: 0, name: 'ALICE' }

export {};
