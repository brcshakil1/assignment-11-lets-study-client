import { PropTypes } from "prop-types";
const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex flex-col bg-base-100 shadow-xl rounded-md relative my-5">
      <div className="w-[100px] left-1/2 top-5 -translate-x-1/2 -translate-y-1/2 h-[100px] absolute rounded-full overflow-hidden shadow-lg border-4 border-[#291A53]">
        <img
          src={testimonial?.image}
          alt="testimonial"
          className="h-full object-cover"
        />
      </div>
      <div className="pt-20 pb-4 text-center px-4">
        <h2 className="text-xl font-bold">{testimonial?.user}</h2>
        <p>{testimonial?.quote}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  testimonial: PropTypes.object,
};

export default Testimonial;
