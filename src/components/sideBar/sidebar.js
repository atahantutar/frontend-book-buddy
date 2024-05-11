import React from "react";
import { useContent } from "../../context/profileContext";

const Sidebar = () => {
  const { setStateContent } = useContent();
  return (
    <div className="col-2 min-vh-100 min-vw-40 bg-dark text-white p-4">
      <div className="min-vw-90 position-fixed">
        <div className="row mb-3">
          <div className="col-2 min-vw-90 ">
            <button
              className="btn btn-outline-secondary w-auto"
              onClick={() => setStateContent({ stateContent: "profile" })}
            >
              Profile
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 w-100">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={() =>
                setStateContent({
                  stateContent: "books",
                })
              }
            >
              Books
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 w-100">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={() =>
                setStateContent({
                  stateContent: "requests",
                })
              }
            >
              My Requests
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 w-100 ">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={() => setStateContent({ stateContent: "swaps" })}
            >
              Requests
            </button>
          </div>
        </div>
        <div className="row mt-auto">
          <div className="col-2 w-100 ">
            <span className="btn btn-outline-secondary w-100 ">User Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
