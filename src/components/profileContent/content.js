import React from "react";

import Profile from "./profile";
import Books from "./userBooks";
import Requests from "./bookRequests";
import Swaps from "./bookSwaps";

import { useContent } from "../../context/profileContext";

const Content = () => {
  const { stateContent } = useContent();

  return (
    <div className="col-10 ms-0">
      {stateContent.stateContent === "profile" && <Profile />}
      {stateContent.stateContent === "books" && <Books />}
      {stateContent.stateContent === "requests" && <Requests />}
      {stateContent.stateContent === "swaps" && <Swaps />}
    </div>
  );
};

export default Content;
