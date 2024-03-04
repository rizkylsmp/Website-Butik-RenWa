import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#EFE6E6] h-screen w-1/3">
      <div className="p-5">FOTO PROFIL</div>
      <div className="flex flex-col">
        <div className="border-y-2 border-black p-2">Dashboard</div>
        <div className="border-b-2 border-black p-2">Data Karyawan</div>
        <div className="border-b-2 border-black p-2">Data Penjualan</div>
        <div className="border-b-2 border-black p-2">Barang Masuk</div>
        <div className="border-b-2 border-black p-2">Barang Keluar</div>
      </div>
    </div>
  );
};

export default Sidebar;
