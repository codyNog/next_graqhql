import { client } from "~/apis";
import { UpdateUserInput } from "~/graphql/types";

const getUsers = async () => (await client.getUsers()).data.getUsers;

const getUser = async (uid: string) =>
  (await client.getUser({ uid })).data.getUser;

const updateUser = async (updateUserInput: UpdateUserInput) =>
  (await client.updateUser({ updateUserInput })).data.updateUser;

export const userRequests = {
  getUsers,
  getUser,
  updateUser
};
