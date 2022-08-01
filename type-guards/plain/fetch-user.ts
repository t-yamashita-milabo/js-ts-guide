import { User, isUser } from "./user";

export const fetchUser = async (): Promise<User> => {
  const res = await fetch("/users/me");
  const json: any = await res.json(); // we don't know `json` is User yet.

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} - ${res.statusText}`);
  }

  // using type guard
  if (!isUser(json)) {
    throw new Error("API Error: unexpected response");
  }

  return json; // `json` is surely User thanks to the type guard.
};
