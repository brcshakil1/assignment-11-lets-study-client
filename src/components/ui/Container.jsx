import { PropTypes } from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auth w-full px-[25px]">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
