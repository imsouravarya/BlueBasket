import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import Trending from "./Pages/Trending/Trending";
import Sale from "./Pages/Sale/Sale";
import Cart from "./Pages/Cart/Cart";
import DiwaliSale from "./Pages/DiwaliSale/DiwaliSale";
import Info from "./Pages/Info/Info"
import { CartProvider } from "./Components/Context/CartContext";
import Ending from "./Pages/Ending/Ending";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/diwalisale" element={<DiwaliSale />} />
          <Route path="/info" element={<Info />} />
          <Route path="/ending" element={<Ending />} />

        </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
