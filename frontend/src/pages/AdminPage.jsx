import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>AdminPage</div>
      </div>
    </div>
  );
};

export default AdminPage;
