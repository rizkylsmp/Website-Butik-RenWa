import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormAddUsers from "../functions/FormAddUsers";

const DataKaryawan = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = users.filter((user) =>
    user.nama.toLowerCase().includes(searchTerm.toLowerCase())
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

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };

  const handleAddData = (newData) => {
    setUsers((prevData) => [...prevData, newData]);
  };

  return (
    <div className="p-5 m-5 h-fit bg-[#D9D9D9] rounded.,/">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-[20px] font-bold">Data User</h2>

        {/* ======================================================================================= */}

        {/* Button Input */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#F4C5C5] hover:bg-[#e4b8b8] font-semibold py-2 px-4 rounded"
        >
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
            max={users.length}
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
          placeholder="Cari nama..."
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
              No
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Nama
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Jenis Kelamin
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={user.uuid}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {user.username}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {user.nama}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {user.jenisKelamin}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {user.role}
              </td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
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

      <FormAddUsers
        show={showForm}
        onClose={() => setShowForm(false)}
        onSave={handleAddData}
      />
    </div>
  );
};

export default DataKaryawan;
