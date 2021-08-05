import useSWR from "swr";
import { backend } from "~/domain/backend";
import { User } from "~/domain/entity/User";

export const useUser = () => {
  const { data: users, revalidate } = useSWR<User[]>(
    "users",
    backend.user.getUsers
  );

  return { users, revalidate };
};
