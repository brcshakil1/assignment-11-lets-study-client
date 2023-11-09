import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Title from "../Title/Title";
import Container from "./../ui/Container";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios.get("/testimonials.json").then((res) => setTestimonials(res.data));
  }, []);
  console.log(testimonials);
  return (
    <Container>
      <div className="pb-20">
        <div className="text-center py-20 ">
          <Title>Testimonials</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials?.map((testimonial, idx) => (
            <Testimonial key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
