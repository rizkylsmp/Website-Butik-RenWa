import React from "react";
import { Link } from "react-router-dom";
import {
  UserCircle,
  House,
  Users,
  ChartPieSlice,
  PlusCircle,
  MinusCircle,
} from "@phosphor-icons/react";

const Sidebar = ({ isAdmin }) => {
  const adminLinks = [
    {
      icon: <House size={20} color="#292929" weight="fill" />,
      title: "Dashboard",
      to: "/admin/dashboard",
    },
    {
      icon: <Users size={20} color="#292929" weight="fill" />,
      title: "Data Karyawan",
      to: "/admin/data-karyawan",
    },
    {
      icon: <ChartPieSlice size={20} color="#292929" weight="fill" />,
      title: "Data Penjualan",
      to: "/admin/data-penjualan",
    },
    {
      icon: <PlusCircle size={20} color="#292929" weight="fill" />,
      title: "Barang Masuk",
      to: "/admin/barang-masuk",
    },
    {
      icon: <MinusCircle size={20} color="#292929" weight="fill" />,
      title: "Barang Keluar",
      to: "/admin/barang-keluar",
    },
  ];

  const karyawanLinks = [
    {
      icon: <House size={20} color="#292929" weight="fill" />,
      title: "Dashboard",
      to: "/karyawan/dashboard",
    },
    {
      icon: <ChartPieSlice size={20} color="#292929" weight="fill" />,
      title: "Data Penjualan",
      to: "/karyawan/data-penjualan",
    },
    {
      icon: <PlusCircle size={20} color="#292929" weight="fill" />,
      title: "Terima Barang",
      to: "/karyawan/terima-barang",
    },
    {
      icon: <MinusCircle size={20} color="#292929" weight="fill" />,
      title: "Kembali Barang",
      to: "/karyawan/kembali-barang",
    },
  ];

  const links = isAdmin ? adminLinks : karyawanLinks;

  return (
    <div className="bg-[#EFE6E6] h-full w-3/12">
      <div className="flex items-center gap-2 p-5">
        <UserCircle size={56} weight="fill" />
        <div className="font-semibold">User</div>
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link
            to={link.to}
            className="flex gap-2 items-center px-5 py-3 hover:bg-[#d0c8c8]"
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </div>
      <Link to="/">
        <div className="mt-8 px-5 py-3 bg-[#DAC2C2] hover:bg-[#b7a0a0] font-semibold">
          Keluar
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
