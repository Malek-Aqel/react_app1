import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Products />
        <Footer />
      </div>
    </>
  );
}
