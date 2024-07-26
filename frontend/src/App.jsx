import MainPage from "./pages/MainPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
