import { PropTypes } from "prop-types";

const MySubmittedAssignment = ({ assignment }) => {
  const { title, marks, status, obtainMarks, feedback } = assignment;

  return (
    <div className="bg-base-200 rounded-md relative transition-transform hover:shadow-xl shadow-slate-600 hover:scale-95 overflow-hidden">
      <h3 className="text-xl font-bold text-center px-2 py-4">{title}</h3>
      <div className="bg-slate-800 text-white  rounded-t-3xl py-3 px-5 ">
        <p className="font-semibold">
          Total Marks: <span className="font-bold">{marks}</span>
        </p>
        <p className="font-semibold capitalize">
          Status:{" "}
          <span
            className={`font-bold ${
              status === "pending" ? "text-red-400" : "text-green-500"
            }`}
          >
            {status}
          </span>
        </p>
        <p className="font-semibold">
          Obtain Marks:{" "}
          <span className="font-bold">
            {obtainMarks || "Still not checked"}
          </span>
        </p>
        <p className="font-semibold">
          Feedback:{" "}
          <span className="font-bold">{feedback || "Still not checked"}</span>
        </p>
      </div>
    </div>
  );
};

MySubmittedAssignment.propTypes = {
  assignment: PropTypes.object,
};

export default MySubmittedAssignment;
