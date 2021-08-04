import { Users, User } from "~/graphql/types";
import { client } from "~/apis";

const getUsers = async (): Promise<Users> => {
  const { users } = (await client.Users()).data;
  return users;
};

const getUser = async (uid: string): Promise<User> => {
  const { user } = (await client.User({ uid })).data;
  return user;
};

export const userRequests = {
  getUsers,
  getUser
};
