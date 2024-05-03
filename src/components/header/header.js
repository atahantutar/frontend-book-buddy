import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Header = (props) => {
  const { user, setUser } = useAuth();

  const handleFormSubmit = (event) => {
    event.preventDefault();
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={`/`}></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to={`/`} tabIndex="-1">
                Profile
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={`/`}
                    tabIndex="-1"
                    onClick={() => {
                      setUser(false);
                    }}
                  >
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={`/addBook`}
                    tabIndex="-1"
                  >
                    Add Book
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
              onChange={props.searchTextProp}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;