import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaksi from "./pages/Transaksi.jsx";
import Add from "./pages/Add.jsx";
import Update from "./pages/Update.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Transaksi />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
