import React from "react";
import { useAuth } from "../../context/authContext";

const Books = (props, swapRequestProps) => {
  const { user } = useAuth();
  return (
    <div className="container my-4 ">
      <div className="row">
        {props.books.map((book, i) => (
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
                  {user ? (
                    <button
                      type="button"
                      className="btn btn-md btn-outline-success mx-2"
                      onClick={() => props.swapRequestProps(book.id)}
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
                    <span className="badge bg-info">{book.language}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
