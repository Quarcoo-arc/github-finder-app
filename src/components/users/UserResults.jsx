import UsersContext from "../../context/UsersContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import { useContext } from "react";

const UserResults = () => {
  const { data, isLoading } = useContext(UsersContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {data.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;