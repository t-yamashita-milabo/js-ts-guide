import { ZUser, User } from "./user";

export const fetchUser = async (): Promise<User> => {
  const res = await fetch("/user/me");
  const json: any = await res.json();

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} - ${res.statusText}`);
  }

  const r = ZUser.safeParse(json);

  if (!r.success) {
    console.error(r.error);
    throw new Error("API Error: unexpected response");
  }

  return r.data;
};
