import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const KaryawanPage = () => {
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
    <div className="flex font-nunito">
      <Sidebar isAdmin={false} />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default KaryawanPage;
