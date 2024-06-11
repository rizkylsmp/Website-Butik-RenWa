import React, { useState } from "react";

const FormAddPenjualan = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    tanggal: "",
    noTransaksi: "",
    nama: "",
    pemasukan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Tambah Data Penjualan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="tanggal">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="noTransaksi">
              No Transaksi
            </label>
            <input
              type="text"
              id="noTransaksi"
              name="noTransaksi"
              value={formData.noTransaksi}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="nama">
              Nama Barang
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
            <label className="block mb-1" htmlFor="pemasukan">
              Pemasukan
            </label>
            <input
              type="number"
              id="pemasukan"
              name="pemasukan"
              value={formData.pemasukan}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
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

export default FormAddPenjualan;
