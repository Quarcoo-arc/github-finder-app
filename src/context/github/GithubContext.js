import { createContext, useState, useEffect } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_KEY;

export const GithubContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setData(data);
  };

  return (
    <GithubContext.Provider value={{ data, isLoading }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
