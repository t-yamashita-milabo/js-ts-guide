import axios from "axios";

const permissions = ["read", "write", "execute"] as const;

export type Permission = typeof permissions[number];

export type User = {
  id: number;
  name: string;
  active: boolean;
  permissions: Permission[];
};

export const fmtUser = (user: User) => `(${user.id})${user.name}`;

export const hasPerm = (user: User, permissions: Permission[]) =>
  permissions.every((perm) => user.permissions.includes(perm));

export const cmpUser = (a: User, b: User) =>
  Number(a.id > b.id) - Number(a.id < b.id);

/**
 *  Returns a new User array sorted by `id` in asc
 * */
export const sortUsers = (users: User[]) => [...users].sort(cmpUser);

export const fetchUser = async ({ id }: { id: number }): Promise<User> =>
  await (
    await axios.get(`http://localhost/user/${id}`)
  ).data;

// Don't omit the return type `User` to sure it returns a `User` object
export const UserFactory = (args?: Partial<User>): User => ({
  id: 0,
  name: "alice",
  active: true,
  permissions: ["read", "write"],
  ...args,
});
