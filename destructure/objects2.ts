type User = {
  id: number;
  name: string;
  active?: boolean;
};

const alice: User = {
  id: 0,
  name: "alice",
  active: true,
};

const bob: User = {
  id: 1,
  name: "bob",
};

{
  const reprUser = (user: User) =>
    `User(id=${user.id}, name=${user.name}, active=${
      user.active === undefined ? false : user.active
    })`;

  const s1 = reprUser(alice);
  console.log(s1); // User(id=0, name=alice, active=true)

  const s2 = reprUser(bob);
  console.log(s2); // User(id=1, name=bob, active=false)
}

{
  // using destructure
  const reprUser = ({ id, name: username, active = false }: User) =>
    `User(id=${id}, name=${username}, active=${active})`;

  const s1 = reprUser(alice);
  console.log(s1); // User(id=0, name=alice, active=true)

  const s2 = reprUser(bob);
  console.log(s2); // User(id=1, name=bob, active=false)
}

export {};
