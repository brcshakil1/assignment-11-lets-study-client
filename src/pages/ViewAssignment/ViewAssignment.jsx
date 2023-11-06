import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const ViewAssignment = () => {
  const assignment = useLoaderData();
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const handleSubmittedAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdf = form.pdf.value;
    const note = form.note.value;
    const submission = {
      pdf,
      note,
      title: assignment?.title,
      marks: assignment?.marks,
      status: "pending",
      examineeName: user?.displayName,
      examineeEmail: user?.email,
    };
    console.log(submission);

    axios.post("/user/submitted-assignment", submission).then((res) => {
      console.log();
      if (res.data.insertedId) {
        toast.success("Successfully submitted an assignment");
        navigate("/all-submitted-assignments");
      }
    });
  };

  return (
    <Container>
      <div className="min-h-screen grid place-items-center py-10">
        <div className="flex mb-10 w-full lg:w-[900px] flex-col gap-5 items-center md:flex-row-reverse md:p-5 md:rounded-2xl bg-base-300">
          <div className="flex-1 w-full">
            <img
              src={assignment?.image}
              alt="Assignment"
              className="md:rounded-md rounded-t-none rounded-b-2xl object-cover w-full h-[300px] lg:w-[400px] md:h-[500px]"
            />
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-4xl text-slate-800 font-semibold">
              {assignment?.title}
            </h2>
            <p className="font-semibold">
              <small>{assignment?.date}</small>
            </p>
            <div className="py-5">
              <p>{assignment?.description}</p>
              <p className="pt-2 font-semibold capitalize">
                Difficulty Level:{" "}
                <span className="text-[#801C98]">{assignment?.difficulty}</span>
              </p>
              <p className="font-semibold ">
                Total marks:{" "}
                <span className="text-[#801C98]">{assignment?.marks}</span>
              </p>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none"
            >
              Take assignment
            </button>
          </div>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_2" className="modal">
          <form onSubmit={handleSubmittedAssignment} className="modal-box">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  PDF Link
                </span>
              </label>
              <input
                type="text"
                placeholder="assignment pdf link"
                name="pdf"
                className="border-2 p-3 rounded-md"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Note
                </span>
              </label>
              <textarea
                placeholder="assignment pdf link"
                name="note"
                className="border-2 p-3 rounded-md"
                required
              />
              <input type="text" />
            </div>
            <div className="form-control">
              <button
                className="
              btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none"
              >
                Submit
              </button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </Container>
  );
};

export default ViewAssignment;
