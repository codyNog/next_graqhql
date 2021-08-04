import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { graphql } from "msw";
import { graphqlMocks } from "~/mocks/graphql";
import { GRAPHQL_URL } from "~/constants/env";

const localhost = graphql.link(GRAPHQL_URL);

export const handlers = [
  localhost.query("getUsers", (_req, res, ctx) => {
    return res(ctx.data(graphqlMocks.user.usersQuery));
  }),
  localhost.query("getAsset", (_req, res, ctx) => {
    return res(ctx.data(graphqlMocks.asset.assetQuery));
  })
];

export const startTestServer = () => {
  const server = setupServer(...handlers);
  server.listen();
};

if (typeof window === "undefined" || process.env.NODE_ENV === "test") {
  const server = setupServer(...handlers);
  server.listen();
} else {
  const worker = setupWorker(...handlers);
  worker.start();
}
