import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const AssignmentCard = ({ assignment }) => {
  const { _id, title, image, marks, difficulty } = assignment;

  return (
    <div className=" w-full rounded-md overflow-hidden shadow-md hover:shadow-base-300 hover:scale-105 transition-transform ease-in-out duration-500 bg-base-100 ">
      <figure>
        <img src={image} alt="Assignment" className="w-full h-[250px]" />
      </figure>
      <div className="p-4">
        <div>
          <h2 className="card-title font-bold">{title}</h2>
          <p>Marks: {marks}</p>
          <p className="capitalize">Difficulty: {difficulty}</p>
        </div>
        <div className="flex justify-between gap-2 flex-col md:flex-row pt-3">
          <Link to={`/view-assignment/${_id}`}>
            <button className="  py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]">
              View Assignment
            </button>
          </Link>

          <Link
            to={`/update-assignment/${_id}`}
            className="text-center py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]"
          >
            <button className="">Update Assignment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.node,
};

export default AssignmentCard;
