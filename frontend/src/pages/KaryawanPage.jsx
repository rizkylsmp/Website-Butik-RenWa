import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const KaryawanPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar isAdmin={false} />
        <Outlet />
      </div>
    </div>
  );
};

export default KaryawanPage;
