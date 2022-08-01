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
  const usernames: string[] = [];
  for (const user of users) {
    usernames.push(user.name);
  }

  console.log(usernames); // [ 'alice', 'bob', 'eve' ]
}

{
  // using map()
  const usernames = users.map((user) => user.name);

  console.log(usernames); // [ 'alice', 'bob', 'eve' ]
}

export {};
