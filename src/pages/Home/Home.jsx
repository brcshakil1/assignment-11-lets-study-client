import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import FrequentlyAskedQuestion from "../../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Let{`'`}s Study</title>
      </Helmet>
      <Banner />
      <Features />
      <FrequentlyAskedQuestion />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
