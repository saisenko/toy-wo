import MainPage from "./pages/MainPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
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
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
