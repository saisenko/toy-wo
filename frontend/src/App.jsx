import MainPage from "./pages/MainPage.jsx";
// import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Product from "./components/Product/Product.jsx";

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
