import { gql } from "graphql-request";
import { User } from "~/domain/entity/User";
import { UserDocument } from "~/graphql/types";
import { client } from "..";

const getUsersQuery = gql`
  {
    query getUsers(){
      ...users
    }
  }
`;

const getUsers = async () => {
  const { data } = await client.rawRequest<User[]>(getUsersQuery);
  return data;
};

const getUser = async (uid: string) => {
  const data = await client.request<User>(UserDocument, { uid });
  return data;
};

export const usersRequests = {
  getUsers,
  getUser
};
