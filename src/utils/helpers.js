import { jwtDecode } from "jwt-decode";

export const getDecodeToken = () => {
  const userToken = localStorage?.getItem("accessToken");
  if (userToken) {
    const decodeToken = jwtDecode(userToken);
    return decodeToken;
  } else {
    return null;
  }
};
