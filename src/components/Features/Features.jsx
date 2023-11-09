import Title from "../Title/Title";
import Feature from "../Feature/Feature";
import Container from "../ui/Container";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Features = () => {
  const [features, setFeatures] = useState([]);
  // const axios = useAxios();
  // const {
  //   isPending,
  //   error,
  //   data: features,
  // } = useQuery({
  //   queryKey: ["features"],
  //   queryFn: () => axios.get("/features"),
  // });

  // if (isPending) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  useEffect(() => {
    axios.get("/features.json").then((res) => setFeatures(res.data));
  }, []);
  return (
    <Container>
      <div>
        <div className="text-center pt-14 pb-10">
          <Title>Features</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          {features?.map((feature, idx) => (
            <Feature key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
