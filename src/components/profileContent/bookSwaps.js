import React, { useEffect, useState } from "react";
import { userSwapRequests, swapResponse } from "../../axios";

const BookSwaps = () => {
  const [books, setBooks] = useState({ books: [] });

  const swapReturnResponse = async (bookId, statusId) => {
    const response = await swapResponse(bookId, statusId);
    if (response.status === 204) {
      data();
    }
  };
  const data = async () => {
    const response = await userSwapRequests();
    const data = response?.data?.data;
    setBooks({
      books: data,
    });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="m-3">
      <div className="row m-3">
        <div className="col-12">
          <h3>My Request</h3>
        </div>
      </div>
      {books.books.map((book) => (
        <div key={book.id} className="card mb-3 ">
          <div className="card-body row ">
            <div className="col-3">
              <img
                style={{
                  width: "200px",
                  height: "300px",
                }}
                src={book.book.imageUrl}
                alt={book.book.title}
                className="img-fluid"
              />
            </div>
            <div className="col-8 mt-3 ">
              <div className="row m-3">
                <div className="col-4">
                  <h5 className="card-title">{book.book.title}</h5>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-12">
                  <p className="card-text">{book.book.content}</p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-4">
                  <p className="card-text">
                    <strong>Request User : </strong>
                    {book.user.name}
                  </p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-11">
                  <p className="card-text">
                    <strong>Request Status : </strong>
                    {book.status === 1
                      ? "Waiting"
                      : book.status === 2
                      ? "Approved"
                      : "Rejected"}
                  </p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-4 ">
                  <p type="text" className="card-text">
                    <strong> Request Date : </strong>
                    {new Date(book.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="row m-3">
                <div className="col-4">
                  <button
                    type="button"
                    className="form-control btn btn-success"
                    value="Approve"
                    onClick={() => {
                      swapReturnResponse(book.id, 2);
                    }}
                  >
                    Approve
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="form-control btn btn-danger"
                    value="Reject"
                    onClick={() => {
                      swapReturnResponse(book.id, 3);
                    }}
                  >
                    Reject
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

export default BookSwaps;
