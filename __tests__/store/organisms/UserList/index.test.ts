import { startTestServer } from "~/mocks/msw";
import { renderHook } from "@testing-library/react-hooks";
import { useUserList } from "~/store/organisms/UserList";

describe("useUserList", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(useUserList);

    await waitForNextUpdate();

    expect(result.current.users).toStrictEqual([
      { age: 20, assets: [], name: "bar", uid: "foo" }
    ]);
  });
});
