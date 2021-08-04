import { backend } from "~/domain/backend";
import { startTestServer } from "~/mocks/msw";

describe("userImpl", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("getUsers", async () => {
    const users = await backend.user.getUsers();
    expect(users).toStrictEqual([
      { age: 20, assets: [], name: "bar", uid: "foo" }
    ]);
  });
});
