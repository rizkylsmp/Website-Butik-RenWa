import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 m-5 h-fit bg-[#D9D9D9] rounded w-screen">
      <div className="flex flex-col gap-5">
        <div className="text-[20px] font-bold">Dashboard</div>
        <div className="grid grid-cols-2 gap-10">
          <div className="p-10 bg-blue-400">Jumlah Terjual</div>
          <div className="p-10 bg-green-400">Jumlah Produk</div>
          <div className="p-10 bg-yellow-400">Jumlah Pengguna</div>
          <div className="p-10 bg-red-400">Terjual Hari ini</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
