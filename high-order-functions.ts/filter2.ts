type User = {
  id: number;
  name: string;
  active: boolean;
};

const users: User[] = [
  {
    id: 0,
    name: "alice",
    active: true,
  },
  {
    id: 1,
    name: "bob",
    active: false,
  },
  {
    id: 2,
    name: "eve",
    active: true,
  },
];

{
  // imperative
  const activeUsers: User[] = [];
  for (const user of users) {
    if (user.active) {
      activeUsers.push(user);
    }
  }

  console.log(activeUsers);
  // [
  //   { id: 0, name: 'alice', active: true },
  //   { id: 2, name: 'eve', active: true }
  // ]
}

{
  // using filter()
  const activeUsers = users.filter((user) => user.active);

  console.log(activeUsers);
  // [
  //   { id: 0, name: 'alice', active: true },
  //   { id: 2, name: 'eve', active: true }
  // ]
}

export {};
