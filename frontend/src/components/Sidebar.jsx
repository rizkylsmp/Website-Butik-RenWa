import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/LOGO.jpeg";
import {
  House,
  Users,
  ChartPieSlice,
  PlusCircle,
  MinusCircle,
  ArrowCircleLeft,
  SignOut,
} from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = ({ isAdmin }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const adminLinks = [
    {
      icon: <House size={20} color="#292929" weight="fill" />,
      title: "Dashboard",
      to: "/admin/dashboard",
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
    {
      icon: <Users size={20} color="#292929" weight="fill" />,
      title: "Data User",
      to: "/admin/data-karyawan",
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
    <div
      className={`bg-[#EFE6E6] h-screen p-5 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      {/* CLOSE */}
      <ArrowCircleLeft
        size={32}
        color="#1c1c1c"
        weight="fill"
        className={`absolute -right-4 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      {/* LOGO */}
      <div className="flex items-center gap-2 mb-3 cursor-pointer">
        <img
          src={Logo}
          alt=""
          className={`w-[50px] h-[6aku 0px] p-1 duration-300 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <div
          className={`font-extrabold text-[22px] ${
            !open && "scale-0"
          } duration-100`}
        >
          RenWa
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`flex gap-2 items-center p-2 hover:bg-[#d0c8c8] rounded ${
              link.spacing ? "mt-9" : "mt-2"
            }`}
          >
            <div className={`duration-100 ${!open && "items-center"}`}>
              {link.icon}
            </div>
            <div
              className={`duration-300 ${
                !open && "absolute scale-0"
              } duration-300`}
            >
              {link.title}
            </div>
          </Link>
        ))}

        {/* LOGOUT */}
        <button onClick={logout}>
          <div className="flex items-center gap-2 mt-8 px-2 py-3 bg-[#DAC2C2] hover:bg-[#b7a0a0] font-semibold rounded">
            <SignOut
              size={20}
              color="#1c1c1c"
              weight="fill"
              className={` ${!open && "self-center"}`}
            />
            <div className={`${!open && "absolute scale-0"}`}>Keluar</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
