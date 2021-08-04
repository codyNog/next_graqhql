import { User } from "~/domain/entity/User";

interface Props {
  user: User;
}

export const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </div>
  );
};
