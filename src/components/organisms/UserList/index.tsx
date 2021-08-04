import { UserItem } from "~/components/molecules/UserItem";
import { useUserList } from "~/store/organisms/UserList";

export const UserList: React.FC = () => {
  const { users } = useUserList();

  if (!users) return null;

  return (
    <div>
      {users.map((elem) => (
        <UserItem key={elem.uid} user={elem} />
      ))}
    </div>
  );
};
