import Navbar from "../Navbar/Navbar";
import Container from "./../ui/Container";
import Banner from "./../Banner/Banner";

const Header = () => {
  return (
    <div className="min-h-[90vh] ">
      <Container>
        <Navbar />
        <Banner />
      </Container>
    </div>
  );
};

export default Header;
