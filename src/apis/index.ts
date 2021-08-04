import { GraphQLClient } from "graphql-request";
import { GRAPHQL_URL } from "~/constants/env";

export const client = new GraphQLClient(GRAPHQL_URL, {
  headers: {}
});
