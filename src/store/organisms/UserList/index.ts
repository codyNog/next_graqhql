import { GlobalStore } from "~/store/global";

export const useUserList = () => {
  const { users } = GlobalStore.useContainer().userStore;

  return { users };
};
