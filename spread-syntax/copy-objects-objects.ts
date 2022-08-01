const alice = {
  id: 0,
  name: "alice",
  permissions: ["read", "write"],
  group: {
    name: "admin",
  },
};

const anotherAlice = { ...alice };
anotherAlice.permissions.push("execute");
anotherAlice.group.name = "user";

console.log(alice);
// {
//   id: 0,
//   name: 'alice',
//   permissions: [ 'read', 'write', 'execute' ],
//   group: { name: 'user' }
// }
console.log(anotherAlice);
// {
//   id: 0,
//   name: 'alice',
//   permissions: [ 'read', 'write', 'execute' ],
//   group: { name: 'user' }
// }

export {};
