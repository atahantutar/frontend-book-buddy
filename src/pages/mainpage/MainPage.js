import React, { useEffect, useState } from "react";
import Books from "../../components/books/books.js";
import Navbar from "../../components/navbar/Navbar.js";
import { getDecodeToken } from "../../utils/helpers.js";
import { getBooks, userInfo } from "../../axios/index.js";

const Home = () => {
  const [state, setState] = useState({ books: [] });
  const [searchText, setSearchText] = useState({ text: "" });

  const userId = getDecodeToken();

  const user = async () => {
    const response = await userInfo(userId.id);

    const data = response.data.user;
    console.log(data);
  };

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

  useEffect(() => {
    data();
    user();
  }, []);

  return (
    <div>
      <Navbar searchTextProp={searchBook} />
      <Books books={filteredBook} />
    </div>
  );
};

export default Home;
