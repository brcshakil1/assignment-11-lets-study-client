import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const AssignmentCard = ({ assignment, refetch }) => {
  const { user } = useAuth();
  const { _id, title, image, marks, difficulty, email } = assignment;
  const axios = useAxios();
  console.log(email);
  const handleDelete = () => {
    axios.delete(`/all-assignments/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast.success("Successfully deleted");
        refetch();
      }
    });
  };

  console.log(user?.email, email);

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
        <div className=" flex  gap-3 flex-row justify-center ">
          <Link
            to={`/view-assignment/${_id}`}
            className=" py-2 px-4 text-center rounded-md text-white font-semibold bg-[#801C98] "
          >
            <button>Details</button>
          </Link>
          {user?.email && user?.email === email ? (
            <>
              <Link
                to={`/update-assignment/${_id}`}
                className="text-center py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]"
              >
                <button className="">Update</button>
              </Link>
              <button
                onClick={handleDelete}
                className="  py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]"
              >
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
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
