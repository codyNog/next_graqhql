import { anAsset, aUser, aUserEdge, aUsers } from "./graphql";

const mockUsers = aUsers({
  edges: [
    aUserEdge({
      node: aUser({ uid: "foo", name: "bar", age: 20, assets: [] })
    })
  ]
});

const mockAsset = anAsset({ uid: "foo", address: "bar" });

export const graphqlMocks = {
  user: {
    users: mockUsers
  },
  asset: {
    asset: mockAsset
  }
};
