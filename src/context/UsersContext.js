import { createContext, useState, useEffect } from "react";

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();
    setData(data);
  };

  return (
    <UsersContext.Provider value={{ data, isLoading }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
