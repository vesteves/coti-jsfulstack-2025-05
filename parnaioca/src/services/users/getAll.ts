import { User } from "@/types/user.type";

export const getAllUsers = async (): Promise<User[] | []> => {
  const responseRaw = await fetch('/api/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await responseRaw.json();
};