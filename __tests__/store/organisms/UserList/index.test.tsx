import React from "react";
import { startTestServer } from "~/mocks/msw";
import { renderHook } from "@testing-library/react-hooks";
import { useUserList } from "~/store/organisms/UserList";
import { GlobalStore } from "~/store/global";

const wrapper: React.ComponentType = ({ children }) => {
  return <GlobalStore.Provider>{children}</GlobalStore.Provider>;
};

describe("useUserList", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("εζηΆζ", async () => {
    const { result, waitForNextUpdate } = renderHook(useUserList, { wrapper });

    await waitForNextUpdate();

    expect(result.current.users).toStrictEqual([
      { age: 28, assets: [], name: "Kohki Noguchi", uid: "foo" }
    ]);
  });
});
