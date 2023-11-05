import Title from "../../components/Title/Title";
import Container from "../../components/ui/Container";
import bannerImg from "../../assets/banner/assignment-banner.jpg";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";

const Assignments = () => {
  const axios = useAxios();

  const getAssignments = async () => {
    const res = await axios.get("/all-assignments");
    return res;
  };

  const {
    isPending,
    error,
    data: assignment,
  } = useQuery({
    queryKey: ["all-assignment"],
    queryFn: getAssignments,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}.</p>;
  }
  console.log(assignment?.data, isPending, error);

  //   useEffect(() => {
  //     axios.get("/all-assignments").then((res) => {
  //       console.log(res.data);
  //       setAssignments(res.data);
  //     });
  //   }, [axios]);
  return (
    <Container>
      <div className="min-h-screen py-6">
        <div className="w-full h-[400px]">
          <img className="w-full h-full object-cover" src={bannerImg} alt="" />
          <Title>Assignment-Count - </Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20">
          {assignment?.data.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Assignments;
