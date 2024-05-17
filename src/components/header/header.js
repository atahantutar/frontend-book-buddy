import React from "react";

import { useAuth } from "../../context/authContext";
import { useSearchText } from "../../context/searchTextContext";

import { Link } from "react-router-dom";
import { PiLineVerticalLight } from "react-icons/pi";

import Cookies from "universal-cookie";

const Header = () => {
  const { userData, setUserData } = useAuth();
  const { setSearchText } = useSearchText();

  const cookies = new Cookies();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const searchBook = (event) => {
    setSearchText({ text: event.target.value });
  };

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={`/`}>
          Book Buddy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            {userData.name ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={`/addBook`}
                    tabIndex="-1"
                  >
                    Add Book
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={`/profile`}
                    tabIndex="-1"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    tabIndex="-1"
                    to={`/login`}
                    onClick={() => {
                      setUserData({ user: [""] });
                      cookies.remove("AccessToken");
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to={`/login`} tabIndex="-1">
                    Login
                  </Link>
                </li>

                <li className="text-white align-items-center justify-content-center d-flex ">
                  <PiLineVerticalLight />
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={`/register`}
                    tabIndex="-1"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex" onSubmit={handleFormSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchBook}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
