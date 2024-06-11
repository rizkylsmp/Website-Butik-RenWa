import React, { useEffect } from "react";
import {
  ShoppingCartSimple,
  Stack,
  Users,
  ChartBar,
} from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <div className="p-5 m-5 h-fit bg-[#D9D9D9] rounded">
      <div className="flex flex-col gap-5">
        <div className="text-[20px] font-bold">Dashboard</div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex p-10 bg-blue-300">
            <div className="flex flex-col w-60 gap-2 text-center">
              <div className="text-5xl font-bold ">0</div>
              <div className="font-semibold">Jumlah Terjual</div>
            </div>
            <ShoppingCartSimple size={80} color="#636363" weight="fill" />
          </div>
          <div className="flex p-10 bg-green-300">
            <div className="flex flex-col w-60 gap-2 text-center">
              <div className="text-5xl font-bold ">0</div>
              <div className="font-semibold">Jumlah Produk</div>
            </div>
            <Stack size={80} color="#636363" weight="fill" className="" />
          </div>
          <div className="flex p-10 bg-yellow-300">
            <div className="flex flex-col w-60 gap-2 text-center">
              <div className="text-5xl font-bold ">0</div>
              <div className="font-semibold">Jumlah Pengguna</div>
            </div>
            <Users size={80} color="#636363" weight="fill" className="" />
          </div>
          <div className="flex p-10 bg-red-300">
            <div className="flex flex-col w-60 gap-2 text-center">
              <div className="text-5xl font-bold ">0</div>
              <div className="font-semibold">Terjual Hari ini</div>
            </div>
            <ChartBar size={80} color="#636363" weight="fill" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
