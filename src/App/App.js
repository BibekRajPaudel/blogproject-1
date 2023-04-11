import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Loginregister from "../Pages/Loginregister";
import "./App.css";
import Packages from "../Pages/Packages";
import ProtectedRoutes from "../Helper/ProtectedRoutes";
import AddAd from "../Pages/Ad";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginregister />} />
        </Routes>

        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/ads" element={<AddAd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
