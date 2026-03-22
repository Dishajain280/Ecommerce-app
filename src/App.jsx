import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer";
import Homepage from "./pages/homepage/homepage.jsx";
import Cart from "./pages/cart/cart.jsx";
import ProductDetails from "./pages/productDetails/productDetails.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
