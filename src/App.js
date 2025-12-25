import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* ================= COMMON COMPONENTS ================= */
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

/* ================= USER COMPONENTS ================= */
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ServiceDetail from "./components/ServiceDetail";
import Cleaning from "./components/Cleaning";
import Staffing from "./components/Staffing";
import Maintenance from "./components/Maintenance";
import HR from "./pages/HR";

/* ================= ADMIN PAGES ================= */
import AdminDashboard from "./pages/AdminDashboard";
import AdminContacts from "./pages/AdminContacts";

import AdminResumes from "./pages/AdminResumes";

/* ===== HEADER CONTROLLER ===== */
const LayoutWrapper = ({ onLoginClick }) => {
  const location = useLocation();

  // Hide header for admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header onLoginClick={onLoginClick} />}
    </>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {/* HEADER VISIBILITY CONTROL */}
      <LayoutWrapper onLoginClick={() => setShowLogin(true)} />

      {/* GLOBAL LOGIN MODAL */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />

      <Routes>
        {/* ========= PUBLIC ROUTES ========= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ========= SERVICE PAGES ========= */}
        <Route path="/hr" element={<HR />} />

        <Route path="/cleaning" element={<Cleaning />} />

       <Route path="/maintenance" element={<Maintenance />} />

        <Route path="/hr" element={<HR />} />

        <Route
          path="/service-details"
          element={
            <ProtectedRoute>
              <ServiceDetail />
            </ProtectedRoute>
          }
        />

        {/* ========= ADMIN ROUTES ========= */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

          <Route
  path="/admin/resumes"
  element={
    <AdminRoute>
      <AdminResumes />
    </AdminRoute>
  }
/>


        <Route
          path="/admin/contacts"
          element={
            <AdminRoute>
              <AdminContacts />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
