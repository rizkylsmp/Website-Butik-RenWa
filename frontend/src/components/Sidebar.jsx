import React from "react";
import { Link } from "react-router-dom";
import { UserCircle } from "@phosphor-icons/react";

const Sidebar = ({ isAdmin }) => {
  const adminLinks = [
    { title: "Dashboard", to: "/admin/dashboard" },
    { title: "Data Karyawan", to: "/admin/data-karyawan" },
    { title: "Data Penjualan", to: "/admin/data-penjualan" },
    { title: "Barang Masuk", to: "/admin/barang-masuk" },
    { title: "Barang Keluar", to: "/admin/barang-keluar" },
  ];

  const karyawanLinks = [
    { title: "Dashboard", to: "/karyawan/dashboard" },
    { title: "Data Penjualan", to: "/karyawan/data-penjualan" },
    { title: "Terima Barang", to: "/karyawan/terima-barang" },
    { title: "Kembali Barang", to: "/karyawan/kembali-barang" },
  ];

  const links = isAdmin ? adminLinks : karyawanLinks;

  return (
    <div className="bg-[#EFE6E6] h-screen w-1/4">
      <div className="flex items-center gap-2 p-5">
        <UserCircle size={56} weight="duotone" />
        <div className="font-bold">User</div>
      </div>
      <div className="flex flex-col gap-3 p-3">
        {links.map((link, index) => (
          <Link to={link.to} className="p-2 rounded-md hover:bg-[#cdc7c7]">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
