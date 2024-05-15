import React, { useState } from "react";
import { useContent } from "../../context/profileContext";

const Sidebar = () => {
  const { setStateContent } = useContent();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (content, buttonName) => {
    setStateContent({ stateContent: content });
    setActiveButton(buttonName);
  };

  return (
    <div className="col-2 min-vh-100 bg-dark text-white">
      <div className="col-2 position-fixed">
        <div className="row mb-3">
          <button
            className={`btn btn-outline-secondary w-75 ${
              activeButton === "profile" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("profile", "profile")}
          >
            Profile
          </button>
        </div>
        <div className="row mb-3">
          <button
            className={`btn btn-outline-secondary w-75 ${
              activeButton === "books" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("books", "books")}
          >
            Books
          </button>
        </div>
        <div className="row mb-3">
          <button
            className={`btn btn-outline-secondary w-75 ${
              activeButton === "requests" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("requests", "requests")}
          >
            My Requests
          </button>
        </div>
        <div className="row mb-3">
          <button
            className={`btn btn-outline-secondary w-75 ${
              activeButton === "swaps" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("swaps", "swaps")}
          >
            Swaps
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
