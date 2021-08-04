import { client } from "~/apis";

const getUsers = async () => (await client.getUsers()).data.getUsers;

const getUser = async (uid: string) =>
  (await client.getUser({ uid })).data.getUser;

export const userRequests = {
  getUsers,
  getUser
};
