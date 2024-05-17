import React, { useEffect } from "react";

import { useAuth } from "../../context/authContext";
import { useBooks } from "../../context/booksContext";
import { useSearchText } from "../../context/searchTextContext";

import { swapQuery, getBooks } from "../../axios/index.js";

import Swal from "sweetalert2";

const Books = () => {
  const { userData } = useAuth();
  const { books, setBooks } = useBooks();
  const { searchText } = useSearchText();

  const data = async () => {
    const response = await getBooks();
    const data = response.data.Books;
    setBooks({
      books: data,
    });
  };

  let filteredBook = books.books
    .filter((book) => {
      return (
        book.title.toLowerCase().indexOf(searchText?.text?.toLowerCase()) !== -1
      );
    })
    .sort((a, b) => {
      return a.id - b.id;
    });

  const swapRequest = async (id) => {
    try {
      const response = await swapQuery(id);
      if (response.status === 204) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Swap Request Sent",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response?.data?.message || "Something went wrong",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  useEffect(() => {
    data();
  });

  return (
    <div className="container my-4 ">
      <div className="row">
        {filteredBook.map((book, i) =>
          book.user.id !== userData.id ? (
            <div className="col-lg-4 p-4 " key={i}>
              <div className="card mb-4 shadow-sm h-100">
                <div className="text-center">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    style={{
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author.name}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {book.category.name}
                  </p>

                  <p className="card-text">
                    <strong>Publisher:</strong> {book.publisher}
                  </p>
                  <p className="card-text">
                    <strong>Publication Year:</strong>
                    {new Date(book.published).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>User:</strong> {book.user.name}
                  </p>
                  <div className="d-flex justify-content-start  align-items-center">
                    {userData.name &&
                    userData.id !== book.user.id &&
                    book.status !== 2 ? (
                      <button
                        type="button"
                        className="btn btn-md btn-outline-success mx-2"
                        onClick={() => swapRequest(book.id)}
                      >
                        Swap
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className="btn btn-md btn-outline-success mx-2"
                    >
                      Detail
                    </button>
                    <h2>
                      {book.status === 2 ? (
                        <span className="badge bg-secondary">Swapped</span>
                      ) : (
                        <span className="badge bg-success">Open to swap</span>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Books;
