import { PropTypes } from "prop-types";

const Feature = ({ feature }) => {
  return (
    <div className="card w-full glass text-base-200">
      <figure>
        <img
          src={feature?.image}
          alt={feature?.title}
          className="h-auto md:h-[280px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{feature?.title}</h2>
        <p>{feature?.description}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object,
};

export default Feature;
