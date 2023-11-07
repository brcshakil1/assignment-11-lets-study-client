import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import Error from "./../Error/Error";
import Title from "../Title/Title";
import Feature from "../Feature/Feature";
import Container from "../ui/Container";

const Features = () => {
  const axios = useAxios();
  const {
    isPending,
    error,
    data: features,
  } = useQuery({
    queryKey: ["features"],
    queryFn: () => axios.get("/features"),
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <Container>
      <div>
        <div className="text-center pt-14 pb-10">
          <Title>Features</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          {features?.data?.map((feature) => (
            <Feature key={feature?._id} feature={feature} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
