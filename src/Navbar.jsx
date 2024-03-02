/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="ms-auto" id="navbarSupportedContent">
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/products">Products </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
