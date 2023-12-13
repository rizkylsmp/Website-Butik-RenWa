import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaksi from "./pages/Transaksi";
import Add from "./pages/Add";
import Update from "./pages/Update";

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
