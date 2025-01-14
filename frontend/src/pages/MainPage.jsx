import Header from "../components/Header/Header.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";

const products = [
  {
      name: "Test Product 1",
      price: 10.0,
      image: "./img/cheporte-sign-owl.png",
      rating: "****"
  },
  {
      name: "Test Product 2",
      price: 20.0,
      image: "./img/cheporte-sign-owl.png",
      rating: "*****"
  },
  {
      name: "Test Product 3",
      price: 15.0,
      image: "./img/cheporte-sign-owl.png",
      rating: "***"
  },
  {
    name: "Test Product 4",
    price: 15.0,
    image: "./img/cheporte-sign-owl.png",
    rating: "***"
  }
];

function MainPage() {
  return (
    <>
      <Header />
      <Categories />
      <Carousel title="Новинки" products={products}/>
    </>
  );
}

export default MainPage;
