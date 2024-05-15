import React, { useEffect, useState } from "react";
import { userSwapRequests, swapResponse } from "../../axios";
import Swal from "sweetalert2";

const BookSwaps = () => {
  const [books, setBooks] = useState({ books: [] });

  const swapReturnResponse = async (bookId, statusId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: statusId === 2 ? "Approve" : "Reject",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await swapResponse(bookId, statusId);
        if (response.status === 204) {
          data();
          Swal.fire({
            title: statusId === 2 ? "Approved!" : "Rejected!",
            text:
              statusId === 2
                ? "Your request has been approved."
                : "Your request has been rejected.",
            icon: "success",
          });
        }
      }
    });
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
          <h3>Requests</h3>
        </div>
      </div>
      {books.books.map((book) => (
        <div key={book.id} className="card ms-5 mt-3">
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
            <div className="col-7 mb-3 mt-3 ">
              <div className="row mb-3 mt-3">
                <div className="col-12">
                  <h5 className="card-title">{book.book.title}</h5>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-12">
                  <p className="card-text">{book.book.content}</p>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-5">
                  <p className="card-text">
                    <strong>Request User : </strong>
                    {book.user.name}
                  </p>
                </div>
                <div className="col-5">
                  <p type="text" className="card-text">
                    <strong> Request Date : </strong>
                    {new Date(book.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-5">
                  <button
                    type="button"
                    className="form-control btn btn-success"
                    onClick={() => {
                      swapReturnResponse(book.id, 2);
                    }}
                    disabled={book.status === 2}
                  >
                    Approve
                  </button>
                </div>
                <div className="col-5">
                  <button
                    type="button"
                    className="form-control btn btn-danger"
                    onClick={() => {
                      swapReturnResponse(book.id, 3);
                    }}
                    disabled={book.status === 3}
                  >
                    Reject
                  </button>
                </div>
                <div className="col-2">
                  <h3>
                    {book.status === 2 ? (
                      <span className="badge bg-success">Approved</span>
                    ) : book.status === 3 ? (
                      <span className="badge bg-danger">Rejected</span>
                    ) : (
                      <span className="badge bg-warning">Waiting</span>
                    )}
                  </h3>
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
