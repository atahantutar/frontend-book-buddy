import React, { useEffect, useState } from "react";
import Books from "../../components/books/books.js";
import Header from "../../components/header/header.js";
import { getBooks, swapQuery } from "../../axios/index.js";

const Home = () => {
  const [state, setState] = useState({ books: [] });
  const [searchText, setSearchText] = useState({ text: "" });

  const data = async () => {
    const response = await getBooks();
    const data = response.data.Books;
    setState({
      books: data,
    });
  };
  const searchBook = (event) => {
    setSearchText({ text: event.target.value });
  };

  let filteredBook = state.books
    .filter((book) => {
      return (
        book.title.toLowerCase().indexOf(searchText.text.toLowerCase()) !== -1
      );
    })
    .sort((a, b) => {
      return a.id - b.id;
    });

  const swapRequest = async (id) => {
    await swapQuery({ bookId: id });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <Header searchTextProp={searchBook} />
      <Books books={filteredBook} swapRequestProps={swapRequest} />
    </div>
  );
};

export default Home;
