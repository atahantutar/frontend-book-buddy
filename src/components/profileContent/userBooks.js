import React, { useEffect, useState } from "react";
import { getUserBook, deleteBook, setStateBook } from "../../axios";
import Swal from "sweetalert2";

const UserBooks = () => {
  const [books, setBooks] = useState({ books: [] });

  const data = async () => {
    const response = await getUserBook();
    const data = response?.data?.data;
    setBooks({
      books: data,
    });
  };

  const delBook = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = deleteBook({ id: id });
        if (response?.status === 200) {
          data();
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const editBook = async (id, status) => {
    await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        1: "Open to swap",
        2: "Close to swap",
      },
      inputPlaceholder: "Select a Status",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise(async (resolve) => {
          if (value !== "") {
            if (parseInt(value) === 1) {
              if (status === 2) {
                await setStateBook({ id: id }, { status: value });
                await data();
                resolve();
              } else {
                resolve("You need to select a status");
              }
            }
            if (parseInt(value) === 2) {
              if (status === 1) {
                await setStateBook({ id: id }, { status: value });
                await data();
                resolve();
              } else {
                resolve("You need to select a status");
              }
            }
          } else {
            resolve("You need to select a status");
          }
        });
      },
    });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="m-3">
        <div className="row m-3">
          <div className="col-12">
            <h3>My Books</h3>
          </div>
        </div>
      </div>
      {books?.books?.map((book) => (
        <div key={book.id} className="card ms-5 mt-3">
          <div className="card-body row">
            <div className="col-3">
              <img
                style={{
                  width: "200px",
                  height: "300px",
                }}
                src={book.imageUrl}
                alt={book.title}
                className="img-fluid"
              />
            </div>
            <div className="col-7">
              <div className="row mb-3 mt-3">
                <div className="col-6">
                  <h5 className="card-title">{book.title}</h5>
                </div>
                <div className="col-6">
                  <p className="card-text">{book.author.name}</p>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-12">
                  <p className="card-text">{book.content}</p>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-5">
                  <p className="card-text">
                    <strong>Publisher: </strong>
                    {book.publisher}
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text">
                    <strong>Book Published: </strong>
                    {new Date(book.published).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-5">
                  <p className="card-text">
                    <strong>Category: </strong>
                    {book.category.name}
                  </p>
                </div>
                <div className="col-5">
                  <p className="card-text">
                    <strong>Pages: </strong> {book.pages}
                  </p>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-5">
                  <button
                    type="button"
                    className="form-control btn btn-primary"
                    onClick={() => {
                      editBook(book.id, book.status);
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div className="col-5">
                  <button
                    type="button"
                    className="form-control btn btn-danger"
                    onClick={() => {
                      delBook(book.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div className="col-2">
                  <h3>
                    {book.status === 2 ? (
                      <span className="badge bg-secondary">Swapped</span>
                    ) : (
                      <span className="badge bg-success">Open to swap</span>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserBooks;
