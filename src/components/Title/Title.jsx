import { PropTypes } from "prop-types";
const Title = ({ children }) => {
  return <h2 className="text-3xl font-bold text-[#CFCCD5]">{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
