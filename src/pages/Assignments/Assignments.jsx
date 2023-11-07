import Title from "../../components/Title/Title";
import Container from "../../components/ui/Container";
import bannerImg from "../../assets/banner/assignment-banner.jpg";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

const Assignments = () => {
  const [difficulty, setDifficulty] = useState("");
  const axios = useAxios();

  const {
    isPending,
    error,
    data: assignment,
  } = useQuery({
    queryKey: ["all-assignment", difficulty],
    queryFn: () => axios.get(`/all-assignments?difficulty=${difficulty}`),
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}.</p>;
  }

  return (
    <Container>
      <div className="min-h-screen py-6">
        <div className="w-full md:h-[400px] h-[300px] relative rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover " src={bannerImg} alt="" />
          <div className="absolute w-full h-full grid place-items-center bg-[#000000b3] top-0 left-0">
            <h2 className="text-[#cfccd5] text-3xl font-bold">
              Take a challenge
            </h2>
          </div>
        </div>
        <div className="text-center pt-10 md:pt-16">
          <Title>Assignments</Title>
        </div>
        <div>
          <div className="pt-10 pb-5 flex flex-col gap-2">
            <label className="text-xl font-semibold text-[#cfccd5]">
              Filter:{" "}
            </label>
            <select
              onChange={(e) => setDifficulty(e.target.value)}
              className="border-0 rounded-md p-2 w-28"
              defaultValue={difficulty}
            >
              <option value="">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {assignment?.data?.map((assignment) => (
              <AssignmentCard key={assignment._id} assignment={assignment} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Assignments;
