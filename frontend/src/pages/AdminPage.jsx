import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar isAdmin/>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
