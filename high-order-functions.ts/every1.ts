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
  let isAllActive = true;

  for (const user of users) {
    if (!user.active) {
      isAllActive = false;
      break;
    }
  }

  console.log(isAllActive); // false
}

{
  // imperative
  let isAllActive = users.every((user) => user.active);

  console.log(isAllActive); // false
}

export {};
