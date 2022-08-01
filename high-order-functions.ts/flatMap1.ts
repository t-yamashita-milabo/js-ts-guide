type User = {
  id: number;
  name: string;
  active: boolean;
};

const users: User[][] = [
  [
    { id: 0, name: "alice", active: true },
    { id: 1, name: "bob", active: false },
    { id: 2, name: "eve", active: true },
  ],
  [
    { id: 3, name: "emma", active: false },
    { id: 4, name: "weston", active: true },
    { id: 5, name: "john", active: false },
  ],
];

{
  // imperative
  const activeUsers: User[] = [];
  for (const us of users) {
    for (const user of us) {
      if (user.active) {
        activeUsers.push(user);
      }
    }
  }

  console.log(activeUsers);
  // [
  //   { id: 0, name: 'alice', active: true },
  //   { id: 2, name: 'eve', active: true },
  //   { id: 4, name: 'weston', active: true }
  // ]
}

{
  // using flatMap()
  const activeUsers = users.flatMap((us) => us.filter((user) => user.active));

  console.log(activeUsers);
  // [
  //   { id: 0, name: 'alice', active: true },
  //   { id: 2, name: 'eve', active: true },
  //   { id: 4, name: 'weston', active: true }
  // ]
}

export {};
