import { GraphQLClient } from "graphql-request";
import { GRAPHQL_URL } from "~/constants/env";
import { getSdk } from "~/graphql/types";

const graphqlClient = new GraphQLClient(GRAPHQL_URL, {
  headers: {}
});

export const client = getSdk(graphqlClient);
