import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Title from "../../components/Title/Title";
import Container from "./../../components/ui/Container";
import Loading from "../../components/Loading/Loading";
// import { Link } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AllSubmittedAssignment = () => {
  const [isModalTrue, setIsModalTrue] = useState(false);
  const [examineeId, setExamineeId] = useState("");
  const [assignmentMarks, setAssignmentMarks] = useState("");
  const [examineeName, setExamineeName] = useState("");
  const [note, setNote] = useState("");
  const [pdf, setPdf] = useState("");

  const axios = useAxios();
  const {
    isPending,
    error,
    data: assignment,
    refetch,
  } = useQuery({
    queryKey: ["all-submitted-assignment"],
    queryFn: () => axios.get(`/user/all-submitted-assignment?status=pending`),
  });

  const handleGivingMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainMarks = form.marks.value;
    const feedback = form.feedback.value;
    const status = "confirmed";
    const updatedStatus = {
      obtainMarks,
      feedback,
      status,
    };
    console.log(examineeId, obtainMarks, feedback, status);
    axios
      .put(`/user/all-submitted-assignment/${examineeId}`, updatedStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Done Marking!");
          setIsModalTrue(false);
          refetch();
        }
      });
  };

  const handleModal = () => {
    setIsModalTrue(true);
  };

  console.log(isModalTrue);
  // console.log(assignment?.data);

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}.</p>;
  }
  // refetch();
  return (
    <div className="relative">
      <Helmet>
        <title>Submitted Assignment</title>
      </Helmet>
      <Container>
        <div className="min-h-screen py-6 ">
          <div className="text-center pt-10 md:pt-16">
            <Title>All Submitted Assignment</Title>
          </div>
          {assignment?.data?.length > 0 ? (
            <div className="overflow-x-auto py-10">
              <table className="table table-xs md:table-lg text-white">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-white">Title</th>
                    <th className="text-white">Examinee</th>
                    <th className="text-white">Marks</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {assignment?.data?.map((data) => (
                    <tr key={data?._id}>
                      <td>{data?.title}</td>
                      <td className="flex flex-col">
                        <span>{data?.examineeName}</span>
                        <span>{data?.examineeEmail}</span>
                      </td>
                      <td>{data?.marks}</td>

                      <td>
                        <button
                          onClick={() => {
                            handleModal();
                            setExamineeId(data?._id);
                            setAssignmentMarks(data?.marks);
                            setPdf(data?.pdf);
                            setExamineeName(data?.examineeName);
                            setNote(data?.note);
                          }}
                          className="text-center py-2 px-4 rounded-md text-white font-semibold bg-[#801C98]"
                        >
                          Give Mark
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h2 className="text-base-200 font-semibold text-center py-10">
                There are no pending submitted assignment
              </h2>
            </div>
          )}
        </div>
      </Container>
      {/* custom modal */}
      <div
        className={`${
          isModalTrue ? "flex" : "hidden"
        } bg-[#000000b3] w-screen h-screen grid place-items-center absolute top-0 left-0s`}
      >
        <div
          onClick={() => setIsModalTrue(false)}
          className="w-screen h-screen absolute z-10 top-0 left-0"
        ></div>
        <form onSubmit={handleGivingMark} className="modal-box z-20">
          <div>
            <h3>
              <a
                href={pdf}
                rel="noreferrer"
                target="_blank"
                className="text-blue-600"
              >
                {pdf}
              </a>
            </h3>
            <p className="font-semibold">
              Submitted by{" "}
              <span className="text-purple-500">{examineeName}</span>
            </p>
            <p className="font-semibold">
              Note: <span className="text-purple-500">{note}</span>
            </p>
            <p className="font-semibold">
              Total mark of the assignment{" "}
              <span className="text-purple-500">{assignmentMarks}</span>
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-[#9f99aa] font-semibold">
                Give Mark
              </span>
            </label>
            <input
              type="number"
              placeholder="marks"
              name="marks"
              defaultValue={assignmentMarks}
              max={assignmentMarks}
              min={0}
              className="border-2 p-3 rounded-md"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-[#9f99aa] font-semibold">
                Feedback
              </span>
            </label>
            <textarea
              placeholder="feedback"
              name="feedback"
              className="border-2 p-3 rounded-md"
              required
            />
            <input type="text" />
          </div>
          <div className="form-control ">
            <button
              className="
              btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AllSubmittedAssignment;
