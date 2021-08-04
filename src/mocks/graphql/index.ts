import { AssetQuery, UsersQuery } from "~/graphql/types";
import { anAsset, aUser, aUserEdge, aUsers } from "~/mocks/graphql/mock";

const users = aUsers({
  edges: [
    aUserEdge({
      node: aUser({ uid: "foo", name: "bar", age: 20, assets: [] })
    })
  ]
});

const usersQuery: UsersQuery = {
  users
};

const asset = anAsset({ uid: "foo", address: "bar" });

const assetQuery: AssetQuery = {
  asset
};

export const graphqlMocks = {
  user: {
    users,
    usersQuery
  },
  asset: {
    asset,
    assetQuery
  }
};
