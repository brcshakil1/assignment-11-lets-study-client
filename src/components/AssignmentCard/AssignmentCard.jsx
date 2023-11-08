import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
const AssignmentCard = ({ assignment, refetch }) => {
  const { _id, title, image, marks, difficulty, email } = assignment;
  const { user } = useAuth();
  const [isDisable, setIsDisable] = useState(
    user?.email && user?.email === email ? false : true
  );
  const axios = useAxios();

  const handleDelete = () => {
    axios.delete(`/all-assignments/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast.success("Successfully deleted");
        refetch();
      }
    });
  };

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
        <div className=" flex  gap-3 flex-row justify-center pt-3">
          <Link
            to={`/view-assignment/${_id}`}
            className=" py-2 px-4 text-center rounded-md text-white font-semibold bg-[#801C98] "
          >
            <button>Details</button>
          </Link>
          <Link
            to={`/update-assignment/${_id}`}
            className={`rounded-md text-white font-semibold  ${
              isDisable ? "bg-[#a684ad]" : "bg-[#801C98]"
            }`}
          >
            <button disabled={isDisable} className="py-2 px-4 ">
              Update
            </button>
          </Link>
          <button
            disabled={isDisable}
            onClick={handleDelete}
            className={`py-2 px-4 rounded-md text-white font-semibold  ${
              isDisable ? "bg-[#a377ad]" : "bg-[#801C98]"
            }`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
  refetch: PropTypes.func,
};

export default AssignmentCard;
