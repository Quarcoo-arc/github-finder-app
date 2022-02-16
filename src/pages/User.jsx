import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { user, getUserInfo, isLoading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUserInfo(params.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
        </div>
      </div>
    </div>
  );
};

export default User;
