import { PropTypes } from "prop-types";

const Fqa = ({ fqa }) => {
  return (
    <div className="collapse collapse-arrow bg-base-200 mb-3">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{fqa?.question}</div>
      <div className="collapse-content">
        <p>{fqa?.answer}</p>
      </div>
    </div>
  );
};

Fqa.propTypes = {
  fqa: PropTypes.object,
};

export default Fqa;
