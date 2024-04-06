import React from "react";

const Books = (props) => {
  return (
    <div className="container my-4">
      <div className="row">
        {props.books.map((book, i) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img
                src={book.imageurl}
                className="card-img-top"
                alt={book.title}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text">
                  <strong>Author:</strong> {book.author}
                </p>
                <p className="card-text">
                  <strong>Genre:</strong> {book.genre}
                </p>
                <p className="card-text">
                  <strong>Publisher:</strong> {book.publisher}
                </p>
                <p className="card-text">
                  <strong>Publication Year:</strong> {book.publicationyear}
                </p>
                <div className="d-flex justify-content-start  align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-success mx-2"
                  >
                    Swap
                  </button>
                  <button
                    type="button"
                    className="btn btn-md btn-outline-success mx-2"
                  >
                    Detail
                  </button>
                  <h2>
                    <span className="badge bg-info">{book.condition}</span>
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
