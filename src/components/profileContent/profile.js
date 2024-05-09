import React from "react";
import { useAuth } from "../../context/authContext";

const Profile = () => {
  const { userData } = useAuth();
  return (
    <div>
      <h1>Profile</h1>
      <p>Profile content goes here</p>
      {userData && (
        <div>
          <h3>User Details</h3>
          <p>
            <strong>Name: </strong> {userData.name}
          </p>
          <p>
            <strong>E-mail: </strong> {userData.email}
          </p>
          <p>
            <strong>Address: </strong>
            {userData.address}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
