import banner from "../../assets/banner/banner-4.jpg";
import Container from "../ui/Container";

const Banner = () => {
  return (
    <Container>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Let{`'`}s Study Together!
            </h1>
            <p className="mb-5">
              Explore a world of collaborative learning, personalized
              assignments, and seamless progress tracking. Join Let{`'`}s Study
              and embark on a journey to academic excellence
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
