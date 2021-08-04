import { Users, User } from "~/graphql/types";
import { UserDocument, UsersDocument } from "~/graphql/types";
import { client } from "~/apis";

const getUsers = async () => {
  return await client.request<Users>(UsersDocument);
};

const getUser = async (uid: string) => {
  return await client.request<User>(UserDocument, { uid });
};

export const userRequests = {
  getUsers,
  getUser
};
