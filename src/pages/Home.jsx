import UserResults from "../components/users/UserResults";
import GithubContext from "../context/github/GithubContext";
import { useContext } from "react";

const Home = () => {
  const { isLoading } = useContext(GithubContext);
  return (
    <div className="mx-6">
      {isLoading ? (
        <h1 className="text-4xl mb-4">Loading...</h1>
      ) : (
        <h1 className="text-4xl mb-4">Welcome</h1>
      )}

      <UserResults />
    </div>
  );
};

export default Home;
