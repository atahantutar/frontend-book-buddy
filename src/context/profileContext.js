import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [content, setContent] = useState({ content: [] });
  const [stateContent, setStateContent] = useState({ stateContent: "profile" });
  const data = {
    content,
    setContent,
    stateContent,
    setStateContent,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useContent = () => useContext(Context);

export default Provider;
