import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { graphql } from "msw";
import { graphqlMocks } from "..";

const localhost = graphql.link("/graphql");

export const handlers = [
  localhost.query("Users", (_req, res, ctx) => {
    return res(ctx.data(graphqlMocks.user.users));
  }),
  localhost.query("Asset", (_req, res, ctx) => {
    return res(ctx.data(graphqlMocks.asset.asset));
  })
];

if (typeof window === "undefined") {
  const server = setupServer(...handlers);
  server.listen();
} else {
  const worker = setupWorker(...handlers);
  worker.start();
}
