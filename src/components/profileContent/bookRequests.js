import React, { useEffect, useState } from "react";
import { userOfferRequests, rejectRequest } from "../../axios";
import Swal from "sweetalert2";
const BookRequests = () => {
  const [books, setBooks] = useState({ books: [] });

  const data = async () => {
    const response = await userOfferRequests();
    const data = response?.data?.data;
    setBooks({
      books: data,
    });
  };

  const rejectSwapRequest = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await rejectRequest(id);
        if (response?.status === 204) {
          data();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="m-3">
      <div className="row m-3">
        <div className="col-12">
          <h3>Requests From Me</h3>
        </div>
      </div>
      {books?.books?.map((book) => (
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
                    <strong>Acceptor User: </strong>
                    {book.book.user.name}
                  </p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-4">
                  <p className="card-text">
                    <strong>Status: </strong>
                    {book.status === 1
                      ? "Waiting"
                      : book.status === 2
                      ? "Approved"
                      : "Rejected"}
                  </p>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-11"></div>
              </div>
              <div className="row m-3">
                <div className="col-4 ">
                  <p type="text" className="card-text">
                    <strong> Request Date: </strong>
                    {new Date(book.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="row m-3">
                <div className="col-4">
                  <input
                    type="button"
                    className="form-control btn btn-danger"
                    value="Reject"
                    onClick={() => {
                      rejectSwapRequest(book.id);
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookRequests;
