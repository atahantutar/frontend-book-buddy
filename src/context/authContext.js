import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(false);

  const data = {
    user,
    setUser,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
