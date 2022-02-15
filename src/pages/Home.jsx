import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <div className="mx-6 my-12">
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
