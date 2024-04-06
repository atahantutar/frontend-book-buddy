import React, { useEffect, useState } from "react";
import Books from "../../components/books/books.js";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar.js";

const Home = () => {
  const [state, setState] = useState({ books: [] });
  const [searchText, setSearchText] = useState({ text: "" });

  const data = async () => {
    const response = await axios.get("http://localhost:5500/getbooks");

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
  }, []);

  return (
    <div>
      <Navbar searchTextProp={searchBook} />
      <Books books={filteredBook} />
    </div>
  );
};

export default Home;
