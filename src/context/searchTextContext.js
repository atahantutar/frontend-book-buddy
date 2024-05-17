import { useContext, createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [searchText, setSearchText] = useState({ text: "" });

  const data = {
    searchText,
    setSearchText,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useSearchText = () => useContext(Context);

export default Provider;
