import React from "react";

const Sidebar = () => {
  return (
    <div className="col-2 min-vh-100 bg-dark text-white p-4">
      <div className="row mb-3">
        <div className="col-12">
          <h5>Books</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <h5>Swap</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <h5>Request</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
