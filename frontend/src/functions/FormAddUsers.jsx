import React, { useState } from "react";
import axios from "axios";

const FormAddUsers = ({ show, onClose, onSave }) => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    nama: "",
    jenisKelamin: "",
    password: "",
    confPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama: formData.nama,
        username: formData.username,
        password: formData.password,
        confPassword: formData.confPassword,
        role: formData.role,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    saveUser();
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Tambah Data User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="tanggal">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData.username(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="noTransaksi">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="nama">
              Jenis Kelamin
            </label>
            <input
              type="text"
              id="jenisKelamin"
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="pemasukan">
              Password
            </label>
            <input
              type="text"
              id="passwrod"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="pemasukan">
              Konfirmasi Password
            </label>
            <input
              type="text"
              id="confPassword"
              name="confPassword"
              value={formData.confPassword}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="pemasukan">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>

          {/* BUTTON */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddUsers;
