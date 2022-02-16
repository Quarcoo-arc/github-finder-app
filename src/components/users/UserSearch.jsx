import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { data, searchForUsers, clearData } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") {
      setAlert("Please enter something in the input field!", "Error");
    } else {
      //search users
      searchForUsers(text.trim());

      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        {alert && <Alert msg={alert.msg} title={alert.type} />}
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5">
        {data.items && (
          <button onClick={clearData} className="btn btn-ghost btn-lg">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
