/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { Asset, PageInfo, User, UserEdge, Users } from "../graphql/types";

export const anAsset = (
  overrides?: Partial<Asset>,
  relationshipsToOmit: Set<string> = new Set()
): Asset => {
  relationshipsToOmit.add("Asset");
  return {
    uid:
      overrides && overrides.hasOwnProperty("uid")
        ? overrides.uid!
        : "consequatur",
    name:
      overrides && overrides.hasOwnProperty("name") ? overrides.name! : "non",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "neque"
  };
};

export const aPageInfo = (
  overrides?: Partial<PageInfo>,
  relationshipsToOmit: Set<string> = new Set()
): PageInfo => {
  relationshipsToOmit.add("PageInfo");
  return {
    endCursor:
      overrides && overrides.hasOwnProperty("endCursor")
        ? overrides.endCursor!
        : "id",
    hasNextPage:
      overrides && overrides.hasOwnProperty("hasNextPage")
        ? overrides.hasNextPage!
        : true,
    hasPreviousPage:
      overrides && overrides.hasOwnProperty("hasPreviousPage")
        ? overrides.hasPreviousPage!
        : false,
    startCursor:
      overrides && overrides.hasOwnProperty("startCursor")
        ? overrides.startCursor!
        : "eum"
  };
};

export const aUser = (
  overrides?: Partial<User>,
  relationshipsToOmit: Set<string> = new Set()
): User => {
  relationshipsToOmit.add("User");
  return {
    uid: overrides && overrides.hasOwnProperty("uid") ? overrides.uid! : "quo",
    name:
      overrides && overrides.hasOwnProperty("name") ? overrides.name! : "porro",
    age: overrides && overrides.hasOwnProperty("age") ? overrides.age! : 667,
    assets:
      overrides && overrides.hasOwnProperty("assets")
        ? overrides.assets!
        : [
            relationshipsToOmit.has("Asset")
              ? ({} as Asset)
              : anAsset({}, relationshipsToOmit)
          ]
  };
};

export const aUserEdge = (
  overrides?: Partial<UserEdge>,
  relationshipsToOmit: Set<string> = new Set()
): UserEdge => {
  relationshipsToOmit.add("UserEdge");
  return {
    cursor:
      overrides && overrides.hasOwnProperty("cursor")
        ? overrides.cursor!
        : "optio",
    node:
      overrides && overrides.hasOwnProperty("node")
        ? overrides.node!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit)
  };
};

export const aUsers = (
  overrides?: Partial<Users>,
  relationshipsToOmit: Set<string> = new Set()
): Users => {
  relationshipsToOmit.add("Users");
  return {
    totalCount:
      overrides && overrides.hasOwnProperty("totalCount")
        ? overrides.totalCount!
        : 8684,
    pageInfo:
      overrides && overrides.hasOwnProperty("pageInfo")
        ? overrides.pageInfo!
        : relationshipsToOmit.has("PageInfo")
        ? ({} as PageInfo)
        : aPageInfo({}, relationshipsToOmit),
    edges:
      overrides && overrides.hasOwnProperty("edges")
        ? overrides.edges!
        : [
            relationshipsToOmit.has("UserEdge")
              ? ({} as UserEdge)
              : aUserEdge({}, relationshipsToOmit)
          ]
  };
};
