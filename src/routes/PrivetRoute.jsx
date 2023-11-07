import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Loading from "../components/Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(loading);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login">{children}</Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
