import useSWR from "swr";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entity/User";

export const useUserList = () => {
  const { data: users } = useSWR<User[]>("users", backend.user.getUsers);

  return { users };
};
