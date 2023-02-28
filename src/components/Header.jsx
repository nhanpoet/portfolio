/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/z4141507653009_2437cac8ee435a48e964fb54c2a6227c-removebg-preview.png";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="" className="w-[200px] h-[150px]" />
          </a>

          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
