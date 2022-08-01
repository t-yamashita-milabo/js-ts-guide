export type User = {
  id: number;
  name: string;
  active: boolean;
};

// type guard
export const isUser = (arg: unknown): arg is User => {
  const x = arg as User;

  return (
    typeof x?.id === "number" &&
    typeof x?.name === "string" &&
    typeof x?.active === "boolean"
  );
};

const alice = {
  id: 0,
  name: "alice",
  active: true,
};

const bob = {
  id: 1,
  name: 10000,
  active: true,
};

console.log(isUser(alice)); // true
console.log(isUser(bob)); // false

const f = (x: unknown) => {
  if (isUser(x)) {
    return x.name; // No errors shown because your editor knows
    // the type of `x` is User via type guard `isUser()`
  } else {
    return x.name; // Object is of type 'unknown'.ts(2571)
  }
};
