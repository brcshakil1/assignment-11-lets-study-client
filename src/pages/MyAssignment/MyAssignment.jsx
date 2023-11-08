import { useQuery } from "@tanstack/react-query";
import Title from "../../components/Title/Title";
import Container from "../../components/ui/Container";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import MySubmittedAssignment from "../MySubmittedAssignment/MySubmittedAssignment";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";

const MyAssignment = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const axios = useAxios();
  //   get all submitted assignment
  const {
    isPending,
    error,
    data: submittedAssignment,
  } = useQuery({
    queryKey: [],
    queryFn: () =>
      axios.get(`/user/all-submitted-assignment?email=${user?.email}`),
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  console.log(submittedAssignment);

  return (
    <Container>
      {submittedAssignment?.data?.length ? (
        <div className="min-h-screen">
          <div className="text-center py-10">
            <Title>My Assignment</Title>
          </div>
          <div>
            {submittedAssignment?.data?.length && (
              <div>
                <h2 className="text-2xl font-bold text-base-200 border-l-4 pl-4">
                  My all submitted assignment
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10 md:py-14">
                  {submittedAssignment?.data?.map((assignment) => (
                    <MySubmittedAssignment
                      key={assignment?._id}
                      assignment={assignment}
                    />
                  ))}
                </div>
              </div>
            )}
            <div></div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen md:py-36 py-20 text-center">
          <Title>You have not submitted any assignment yet.</Title>
          <Link to="/assignments">
            <button className="btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none">
              Submit assignment
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default MyAssignment;
