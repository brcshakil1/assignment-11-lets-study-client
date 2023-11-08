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

  const limit = 6;
  const [page, setPage] = useState(1);

  const {
    isPending,
    error,
    data: assignment,
    refetch,
  } = useQuery({
    queryKey: ["all-assignment", difficulty, page],
    queryFn: () =>
      axios.get(
        `/all-assignments?difficulty=${difficulty}&page=${page}&limit=${limit}`
      ),
  });

  const totalPage = Math.ceil(assignment?.data.countAssignment / limit);
  console.log(totalPage);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}.</p>;
  }

  console.log(page);
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
              onChange={(e) => {
                setDifficulty(e.target.value);
                refetch();
              }}
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
            {assignment?.data?.result?.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                refetch={refetch}
                assignment={assignment}
              />
            ))}
          </div>
          <div className="text-center pb-5">
            <button onClick={handlePrev} className="btn btn-md mr-3">
              Prev
            </button>
            <div className="join">
              {Array(totalPage)
                ?.fill(0)
                ?.map((item, idx) => {
                  const pageNumber = idx + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`join-item btn s ${
                        page === pageNumber ? "bg-slate-400" : "btn-md"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
            </div>
            <button onClick={handleNext} className="btn btn-md ml-3">
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Assignments;
