import React, { useState } from "react";

const BarangKeluar = () => {
  const [dataKaryawan] = useState([
    { id: 1, jenisKelamin: "Pria", nama: "John Doe", totalPenjualan: 100 },
    { id: 2, jenisKelamin: "Wanita", nama: "Jane Doe", totalPenjualan: 150 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = dataKaryawan.filter((karyawan) =>
    karyawan.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleItemsPerPageChange = (e) => {
    const { value } = e.target;
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-5 m-5 h-fit bg-[#D9D9D9] rounded w-screen">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-[20px] font-bold">Data Karyawan</h2>

        {/* ======================================================================================= */}

        {/* Button Input */}
        <button className="bg-[#F4C5C5] hover:bg-[#e4b8b8] font-semibold py-2 px-4 rounded">
          Tambah Data
        </button>
      </div>

      {/* ======================================================================================= */}

      {/* Input Entri */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">
            Tampilkan&nbsp;
          </label>
          <input
            id="itemsPerPage"
            type="number"
            min="1"
            max={dataKaryawan.length}
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="px-2 py-1 border border-gray-300 rounded-md"
          />
          <label htmlFor="itemsPerPage" className="ml-2">
            &nbsp;Entri
          </label>
        </div>

        {/* ======================================================================================= */}

        {/* Search Bar */}

        <input
          type="text"
          placeholder="Cari nama karyawan..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>

      {/* ======================================================================================= */}

      {/* Tabel */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              ID Karyawan
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Jenis Kelamin
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Nama Karyawan
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Total Penjualan
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((karyawan) => (
            <tr key={karyawan.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {karyawan.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {karyawan.jenisKelamin}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {karyawan.nama}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {karyawan.totalPenjualan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ======================================================================================= */}

      {/* Previous & Next Button */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`bg-[#a4a0a0] hover:bg-[#969393] text-gray-800 font-semibold py-2 px-4 rounded ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          Sebelumnya
        </button>
        <button
          onClick={goToNextPage}
          disabled={
            currentItems.length < itemsPerPage || currentItems.length === 0
          }
          className={`bg-[#F4C5C5] hover:bg-[#e4b8b8] font-semibold py-2 px-4 rounded ${
            currentItems.length < itemsPerPage || currentItems.length === 0
              ? "cursor-not-allowed"
              : ""
          }`}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

export default BarangKeluar