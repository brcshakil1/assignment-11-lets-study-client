import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Title from "../../components/Title/Title";
import Container from "./../../components/ui/Container";
import { useState } from "react";
import toast from "react-hot-toast";

const AllSubmittedAssignment = () => {
  const [pdfLink, setPdfLink] = useState("");
  const [examinee, setExaminee] = useState("");
  const [marksExm, setMarksExm] = useState("");
  const [examineeId, setExamineeId] = useState("");

  const handleExaminee = (id, link, name, marks) => {
    setExamineeId(id);
    setPdfLink(link);
    setExaminee(name);
    setMarksExm(marks);
  };

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

  console.log(assignment);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}.</p>;
  }

  const handleGivingMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainMarks = form.marks.value;
    const feedback = form.feedback.value;
    const status = "confirmed";
    console.log(examineeId, obtainMarks, feedback, status);

    axios
      .put(`/user/all-submitted-assignment/${examineeId}`, {
        obtainMarks,
        feedback,
        status,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Done!");
          refetch();
        }
      });
  };

  return (
    <Container>
      <div className="min-h-screen py-6">
        <div className="text-center pt-10 md:pt-16">
          <Title>All Submitted Assignment</Title>
        </div>
        <div className="overflow-x-auto py-10">
          <table className="table table-xs md:table-lg text-white">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-white">Title</th>
                <th className="text-white">Examinee</th>
                <th className="text-white">Marks</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {assignment?.data?.map((data, idx) => (
                <tr key={data?._id}>
                  <th>{idx + 1}</th>
                  <td>{data?.title}</td>
                  <td className="flex flex-col">
                    <span>{data?.examineeName}</span>
                    <span>{data?.examineeEmail}</span>
                  </td>
                  <td>{data?.marks}</td>

                  <td>
                    <button
                      onClick={() => {
                        handleExaminee(
                          data?._id,
                          data?.pdf,
                          data?.examineeName,
                          data?.marks
                        );
                        document.getElementById("my_modal_2").showModal();
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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_2" className="modal">
            <form onSubmit={handleGivingMark} className="modal-box">
              <div>
                <h3>
                  <a href={pdfLink} className="text-blue-600">
                    PDF link - {pdfLink}
                  </a>
                </h3>
                <p>Submitted by {examinee}</p>
                <p>Total mark of the assignment {marksExm}</p>
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
                  defaultValue={marksExm}
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
      </div>
    </Container>
  );
};

export default AllSubmittedAssignment;
