import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Fqa from "../Fqa/Fqa";
import Title from "../Title/Title";
import Container from "../ui/Container";
import fqa from "../../assets/images/fqa-1.jpg";

const FrequentlyAskedQuestion = () => {
  const axios = useAxios();
  const {
    isPending,
    error,
    data: fqas,
  } = useQuery({
    queryKey: ["fqas"],
    queryFn: () => axios.get("/fqas"),
  });
  console.log(fqas);
  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <Container>
      <div className="pb-14">
        <div className="text-center pt-14 pb-10 ">
          <Title>FQA</Title>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-5">
          <div className="flex-1">
            <img src={fqa} alt="" className="w-full rounded-md" />
          </div>
          <div className="flex-1">
            {fqas?.data?.map((fqa) => (
              <Fqa key={fqa?._id} fqa={fqa} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FrequentlyAskedQuestion;
