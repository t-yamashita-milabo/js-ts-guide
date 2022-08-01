import { rest } from "msw";

import { server } from "../mocks/server";
import {
  Permission,
  fmtUser,
  hasPerm,
  cmpUser,
  sortUsers,
  UserFactory,
  fetchUser,
} from "./user";

describe("fmtUser", () => {
  it("should return format string for user", () => {
    const arg = UserFactory();

    // Use `toMatch()` for string comparisons
    expect(fmtUser(arg)).toMatch("(0)alice"); // string
    expect(fmtUser(arg)).toMatch(/^\(0\)alice$/); // or regexp
  });
});

describe("hasPerm", () => {
  // Use `toBe()` for number or boolean comparisons.
  // You can use `toBeTruhy()` or `toBeFalsy` if acceptable whatever evaluates to `true` or `false`.
  it("should return true when user has the given permissions", () => {
    const user = UserFactory();
    const perms: Permission[] = ["read", "write"];

    expect(hasPerm(user, perms)).toBe(true);
  });

  it("should return true when user has the given permissions", () => {
    const user = UserFactory();
    const perms: Permission[] = ["read", "write", "execute"];

    expect(hasPerm(user, perms)).toBe(false);
  });
});

describe("cmpUser", () => {
  // Use `toBe()` for number or boolean comparisons
  it("should return -1 when a.id < b.id", () => {
    const a = UserFactory();
    const b = UserFactory({ id: 1, name: "bob" });

    expect(cmpUser(a, b)).toBe(-1);
  });

  it("should return 0 when a.id === b.id", () => {
    const a = UserFactory();
    const b = UserFactory({ name: "bob" });

    expect(cmpUser(a, b)).toBe(0);
  });

  it("should return 1 when a.id > b.id", () => {
    const a = UserFactory({ id: 1 });
    const b = UserFactory({ name: "bob" });

    expect(cmpUser(a, b)).toBe(1);
  });
});

describe("sortUsers", () => {
  it("should sort array by id in asc", () => {
    const args = [
      UserFactory({ id: 1, name: "bob" }),
      UserFactory({ id: 2, name: "eve" }),
      UserFactory({ id: 0, name: "alice" }),
    ];

    // Use `toEqual()` to compare objects structurally.
    expect(sortUsers(args)).toEqual([args[2], args[0], args[1]]);
  });
});

describe("fetchUser", () => {
  // Use `async` to callback of test function
  it("should fetch the user", async () => {
    const users = [
      UserFactory(),
      UserFactory({ id: 1, name: "bob" }),
      UserFactory({ id: 2, name: "alice" }),
    ];

    server.use(
      rest.get("http://localhost/user/:id", (req, res, ctx) => {
        const { id } = req.params as { id: string };

        return res(ctx.json(users.filter((user) => `${user.id}` === id)[0]));
      })
    );

    const res = await fetchUser({ id: users[0].id });
    // Use `toEqual()` to compare objects structurally.
    expect(res).toEqual(users[0]);
  });
});
