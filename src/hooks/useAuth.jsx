import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const authUtils = useContext(AuthContext);

  return authUtils;
};

export default useAuth;
