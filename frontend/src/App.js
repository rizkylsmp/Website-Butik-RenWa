import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/AdminPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
