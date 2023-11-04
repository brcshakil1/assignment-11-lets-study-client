import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(loading);

  if (loading) {
    return (
      <div className="min-h-[80vh]">
        <p>Loading...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
