import { PropTypes } from "prop-types";
const AssignmentCard = ({ assignment }) => {
  const { title, image, description, marks, difficulty, date, creatorEmail } =
    assignment;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p>{marks}</p>
        <p>{difficulty}</p>
        <p>{date}</p>
        <p>{creatorEmail}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.node,
};

export default AssignmentCard;
