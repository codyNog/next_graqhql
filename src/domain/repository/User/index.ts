import { usersRequests } from "~/apis/users";

const getUsers = async () => {
  return await usersRequests.getUsers();
};

const getUser = async (uid: string) => {
  return await usersRequests.getUser(uid);
};

export const userImpl = {
  getUsers,
  getUser
};

export type UserUseCase = typeof userImpl;
