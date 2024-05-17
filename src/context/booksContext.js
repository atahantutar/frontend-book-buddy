import { useContext, createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState({ books: [] });
  const [filterBooks, setFilterBooks] = useState({ books: [] });

  const data = {
    books,
    setBooks,
    setFilterBooks,
    filterBooks,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useBooks = () => useContext(Context);

export default Provider;
