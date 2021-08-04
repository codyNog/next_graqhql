import { userRequests } from "~/apis/user";
import { graphqlMocks } from "~/mocks";
import { startTestServer } from "~/mocks/msw";

describe("userRequests", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("getUsers", async () => {
    const users = await userRequests.getUsers();
    expect(users).toStrictEqual(graphqlMocks.user.users);
  });
});
