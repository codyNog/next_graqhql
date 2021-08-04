import { userRequests } from "~/apis/user";
import { User } from "~/domain/entity/User";
import { parsePagination } from "~/libs/graphql";

const getUsers = async (): Promise<User[]> => {
  const users = await userRequests.getUsers();
  return parsePagination(users, true);
};

const getUser = async (uid: string): Promise<User> => {
  const user = await userRequests.getUser(uid);
  return { ...user, assets: [] };
};

export const userImpl = {
  getUsers,
  getUser
};

export type UserUseCase = typeof userImpl;
