import useSWR from "swr";
import { User } from "~/domain/entity/User";

export const useUserList = () => {
  const { data: users } = useSWR<User[]>("users");

  return { users };
};
