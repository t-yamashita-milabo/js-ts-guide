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
  let isAnyActive = false;

  for (const user of users) {
    if (user.active) {
      isAnyActive = true;
      break;
    }
  }

  console.log(isAnyActive); // true
}

{
  // imperative
  let isAnyActive = users.some((user) => user.active);

  console.log(isAnyActive); // true
}

export {};
