import Header from "../components/Header/Header.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";

function MainPage() {
  return (
    <>
      <Header />
      <Categories />
      <Carousel header="Our Newest Goods" />
      <Carousel header="Our Recommendations" />
      <Carousel header="Discover New" />
      <Footer />
    </>
  );
}

export default MainPage;
