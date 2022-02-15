import { createContext, useEffect, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_KEY;

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    data: [],
    isLoading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({ action: "GET_USERS", payload: data });
  };

  return (
    <GithubContext.Provider
      value={{ data: state.data, isLoading: state.isLoading }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
