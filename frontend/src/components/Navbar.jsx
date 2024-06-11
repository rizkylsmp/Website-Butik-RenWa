import React from "react";
import { UserCircle } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="border-b-2 p-3 mr-3 flex gap-2 items-center pl-5 justify-end">
      <UserCircle size={40} weight="fill" />
      <div className="font-semibold">User</div>
    </div>
  );
};

export default Navbar;
