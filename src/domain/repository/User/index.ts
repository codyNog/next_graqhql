import { userRequests } from "~/apis/user";
import { User } from "~/domain/entity/User";
import { UpdateUserInput } from "~/graphql/types";
import { parsePagination } from "~/libs/graphql";

const getUsers = async (): Promise<User[]> => {
  const users = await userRequests.getUsers();
  return parsePagination(users, true);
};

const getUser = async (uid: string): Promise<User> => {
  const user = await userRequests.getUser(uid);
  return { ...user, assets: [] };
};

const updateUser = async (user: User) => {
  const { assets, ...rest } = user;
  const input: UpdateUserInput = {
    ...rest,
    assets: assets.map((elem) => elem.uid)
  };
  await userRequests.updateUser(input);
};

export const userImpl = {
  getUsers,
  getUser,
  updateUser
};

export type UserUseCase = typeof userImpl;
