import React from "react";

import { useAuth } from "../../context/authContext";

const Profile = () => {
  const { userData } = useAuth();

  return (
    <div className="card ms-5 mt-3">
      <div className="card-header">Profile</div>
      <div className="card-body">
        <h5 className="card-title">
          <strong>Username: </strong>
          {userData?.name}
        </h5>
        <p className="card-text">
          <strong>E-mail: </strong>
          {userData?.email}
        </p>
        <p className="card-text">
          <strong>Address: </strong>
          {userData?.address}
        </p>
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
};

export default Profile;
