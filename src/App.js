import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //used for spa single page application

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
