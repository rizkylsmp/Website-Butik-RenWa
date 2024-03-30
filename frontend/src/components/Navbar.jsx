import React from "react";
import Logo from "../assets/LOGO.jpeg";

const Navbar = () => {
  return (
    <div className="bg-[#DAC2C2] p-3 flex gap-3 items-center pl-5">
      <img src={Logo} alt="" className="w-[60px] h-[6aku 0px]" />
      <div className="font-bold text-[25px]">RenWA</div>
    </div>
  );
};

export default Navbar;
