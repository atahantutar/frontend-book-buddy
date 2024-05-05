import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [userData, setUserData] = useState({ user: [] });

  const data = {
    userData,
    setUserData,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
