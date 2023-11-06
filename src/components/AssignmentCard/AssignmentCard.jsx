import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const AssignmentCard = ({ assignment }) => {
  const { user } = useAuth();
  const { _id, title, image, marks, difficulty, creatorEmail } = assignment;

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
        <div className="flex justify-center gap-2 flex-col md:flex-row pt-3">
          <button className="border  py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]">
            View Assignment
          </button>
          <Link to={`/update-assignment/${_id}`}>
            <button className="border py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]">
              Update Assignment
            </button>
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
