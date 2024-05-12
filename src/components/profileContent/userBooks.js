import React, { useEffect, useState } from "react";
import { getUserBook, deleteBook } from "../../axios";
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

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="m-3">
      {books?.books?.map((book) => (
        <div key={book.id} className="card mb-3 ">
          <div className="card-body row ">
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
            <div className="col-8 mt-3 ">
              <div className="row m-3">
                <div className="col-4">
                  <h5 className="card-title">{book.title}</h5>
                </div>
                <div className="col-2">
                  <p className="card-text">{book.author.name}</p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-11">
                  <p className="card-text">{book.content}</p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-4 ">
                  <input
                    type="text"
                    className="form-control"
                    value={book.publisher}
                  ></input>
                </div>
                <div className="col-3 ">
                  <input
                    type="date"
                    className="form-control"
                    value={book.published}
                  ></input>
                </div>
                <div className="col-2">
                  <p className="card-text">
                    {new Date(book.published).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    value={book.category.name}
                  ></input>
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control"
                    value={book.pages}
                  ></input>
                </div>
                <div className="col-4">
                  <h2>
                    {book.status === 2 ? (
                      <span className="badge bg-secondary">Swapped</span>
                    ) : (
                      <span className="badge bg-success">Open to swap</span>
                    )}
                  </h2>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-4">
                  <button
                    type="button"
                    className="form-control btn btn-primary"
                  >
                    Edit
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="form-control btn btn-danger"
                    onClick={() => {
                      delBook(book.id, Swal.fire("Deleted", "", "success"));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBooks;
