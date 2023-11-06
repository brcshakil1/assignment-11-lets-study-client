import { useState } from "react";
import Title from "../../components/Title/Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "./../../components/ui/Container";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
// import { useMutation } from "@tanstack/react-query";

const UpdateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const axios = useAxios();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const date = startDate.toLocaleDateString();
  const creatorEmail = user?.email;
  console.log(date);

  // console.log(createdAssignment);

  // const { mutate } = useMutation({
  //   mutationKey: ["create-assignment"],
  //   mutationFn: (createdAssignmentData) => {
  //     return axios.post("/user/create-assignment", createdAssignmentData);
  //   },
  //   onSuccess: () => toast.success("Assignment created successfully!"),
  // });

  // console.log(mutate);

  const handleUpdateAssignment = (e) => {
    e.preventDefault();

    const createdAssignment = {
      title,
      image,
      description,
      marks,
      difficulty,
      date,
      creatorEmail,
    };

    if (marks > 100 || marks < 30) {
      return toast.error("Total assignment marks must be between 30 to 100");
    }

    if (date < new Date()) {
      return toast.error(
        "You have to give at least one day and you can't select past dates"
      );
    }

    axios.put("/user/update-assignment", createdAssignment).then((res) => {
      console.log(res.data);
      toast.success("Successfully created an assignment");
    });
  };

  return (
    <Container>
      <div className="hero min-h-screen py-10 md:py-14">
        <div className="w-full px-4 md:px-8 shadow-md md:w-1/2 my-auto py-10 shadow-[#4f4370] ">
          <div className=" pb-2">
            <Title>Update your assignment</Title>
          </div>
          <form onSubmit={handleUpdateAssignment}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Title
                </span>
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title"
                name="title"
                className="input input-ed rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Thumbnail Image URL
                </span>
              </label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="image url"
                name="image"
                className="input input-ed rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Description
                </span>
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="p-3"
                name="description"
                placeholder="description"
                required
              ></textarea>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Marks
                  </span>
                </label>
                <input
                  onChange={(e) => setMarks(e.target.value)}
                  type="number"
                  placeholder="marks"
                  name="marks"
                  minLength={20}
                  maxLength={100}
                  className="input input-ed rounded-sm"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Difficulty
                  </span>
                </label>
                <select
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="input input-ed rounded-sm"
                  name="difficulty"
                  defaultValue="easy"
                  id="difficulty"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Last Date
                  </span>
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-ed rounded-sm w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-[#3144D7] to-[#801C98] font-semibold text-white border-none">
                Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default UpdateAssignment;
