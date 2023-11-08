import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import FrequentlyAskedQuestion from "../../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PDFFile from "../../components/PDFFile/PDFFile";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <PDFFile />
      <FrequentlyAskedQuestion />
      <Footer />
    </div>
  );
};

export default Home;
