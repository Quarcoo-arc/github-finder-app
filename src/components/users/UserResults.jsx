import UsersContext from "../../context/UsersContext";
import { useContext } from "react";

const UserResults = () => {
  const { data, isLoading } = useContext(UsersContext);
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {!isLoading && data.map((user) => <h3 key={user.id}>{user.login}</h3>)}
    </div>
  );
};

export default UserResults;
