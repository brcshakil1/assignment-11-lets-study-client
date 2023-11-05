import { useState } from "react";
import Title from "../../components/Title/Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "./../../components/ui/Container";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const axios = useAxios();

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const difficulty = form.difficulty.value;
    const date = startDate;
    const creatorEmail = user?.email;

    if (date < new Date()) {
      return toast.error("You can't select past dates");
    }

    if (marks > 100 || marks < 30) {
      return toast.error("Total assignment marks must be between 30 to 100");
    }

    const createdAssignment = {
      title,
      image,
      description,
      marks,
      difficulty,
      date,
      creatorEmail,
    };

    axios.post("/create-assignment", createdAssignment).then((res) => {
      console.log(res.data);
      toast.success("Successfully created an assignment");
    });

    console.log(createdAssignment);
  };
  return (
    <Container>
      <div className="hero min-h-screen py-10 md:py-14">
        <div className="w-full px-4 md:px-8 shadow-md md:w-1/2 my-auto py-10 shadow-[#4f4370] ">
          <div className=" pb-2">
            <Title>Create an assignment</Title>
          </div>
          <form onSubmit={handleCreateAssignment}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Title
                </span>
              </label>
              <input
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
                className="p-3"
                name="description"
                placeholder="description"
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
                  className="input input-ed rounded-sm"
                  name="difficulty"
                  defaultValue="easy"
                  id="difficulty"
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

export default CreateAssignment;
