import Cookies from "universal-cookie";

import { Navigate } from "react-router-dom";

const AuthRouter = ({ children }) => {
  const cookies = new Cookies();

  if (!cookies.get("AccessToken")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthRouter;
