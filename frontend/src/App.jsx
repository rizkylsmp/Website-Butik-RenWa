import LoginPage from "./pages/LoginPage";
import KaryawanPage from "./pages/KaryawanPage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./contents/Dashboard";
import BarangKeluar from "./contents/BarangKeluar";
import BarangMasuk from "./contents/BarangMasuk";
import DataKaryawan from "./contents/DataKaryawan";
import DataPenjualan from "./contents/DataPenjualan";
import TerimaBarang from "./contents/TerimaBarang";
import KembaliBarang from "./contents/KembaliBarang";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* PAGES */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/karyawan" element={<KaryawanPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="terima-barang" element={<TerimaBarang />} />
            <Route path="kembali-barang" element={<KembaliBarang />} />
            <Route path="data-penjualan" element={<DataPenjualan />} />
          </Route>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="barang-keluar" element={<BarangKeluar />} />
            <Route path="barang-masuk" element={<BarangMasuk />} />
            <Route path="data-karyawan" element={<DataKaryawan />} />
            <Route path="data-penjualan" element={<DataPenjualan />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
