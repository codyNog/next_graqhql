import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import { GraphQLError } from "graphql-request/dist/types";
import { print } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Asset = {
  __typename?: "Asset";
  uid: Scalars["String"];
  name: Scalars["String"];
  address: Scalars["String"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  user: User;
  users?: Maybe<Users>;
};

export type QueryUserArgs = {
  uid: Scalars["String"];
};

export type User = {
  __typename?: "User";
  uid: Scalars["String"];
  name: Scalars["String"];
  age: Scalars["Int"];
  assets?: Maybe<Array<Asset>>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type Users = {
  __typename?: "Users";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type UserFragment = { __typename?: "User"; uid: string; name: string };

export type UserQueryVariables = Exact<{
  uid: Scalars["String"];
}>;

export type UserQuery = {
  __typename?: "Query";
  user: { __typename?: "User"; uid: string; name: string };
};

export const UserFragmentDoc = gql`
  fragment user on User {
    uid
    name
  }
`;
export const UserDocument = gql`
  query User($uid: String!) {
    user(uid: $uid) {
      ...user
    }
  }
  ${UserFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const UserDocumentString = print(UserDocument);
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    User(
      variables: UserQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<{
      data?: UserQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserQuery>(UserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "User"
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
