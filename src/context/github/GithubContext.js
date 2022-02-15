import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    data: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setIsLoading = () => dispatch({ type: "SET_ISLOADING" });

  const searchForUsers = async (param) => {
    setIsLoading();

    const response = await fetch(`${GITHUB_URL}/search/users?q=${param}`);
    const data = await response.json();
    console.log(data);
    dispatch({ type: "GET_USERS", payload: data });
  };

  const clearData = () => dispatch({ type: "CLEAR_ALL" });

  return (
    <GithubContext.Provider
      value={{
        data: state.data,
        isLoading: state.isLoading,
        searchForUsers,
        clearData,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
