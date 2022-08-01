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
  // get property values via the property name
  // then assign them to variables
  const id = alice.id;
  const username = alice.name;
  const active = alice.active === undefined ? false : alice.active;

  console.log(id, username, active); // 0 alice true
}

{
  // using destructure
  const { id, name: username, active = false } = bob;
  console.log(id, username, active); // 1 bob false
}

export {};
