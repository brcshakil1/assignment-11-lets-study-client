import Fqa from "../Fqa/Fqa";
import Title from "../Title/Title";
import Container from "../ui/Container";
import fqa from "../../assets/images/fqa-1.jpg";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const FrequentlyAskedQuestion = () => {
  const [fqas, setFqas] = useState([]);
  useEffect(() => {
    axios.get("/fqas.json").then((res) => setFqas(res.data));
  }, []);
  console.log(fqas);
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
            {fqas?.map((fqa, idx) => (
              <Fqa key={idx} fqa={fqa} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FrequentlyAskedQuestion;
