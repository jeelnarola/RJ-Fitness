import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Forms/Login";
import Layout from "./Components/Layout/Layout";
import ProtectedRoute from "./Components/Protected/ProtectedRout";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import TrainerPage from "./Pages/TrainerPage";
import MembersPage from "./Pages/MembersPage";
import AddTrainer from "./Components/Forms/AddTrainer";

function App() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/login" element={<Login />} />
      <Route path="/add-trainer" element={<AddTrainer />} />

      {/* ADMIN AREA */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* 👇 Default route when visiting /admin */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Admin dashboard page */}
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="trainer" element={<TrainerPage />} />
        <Route path="members" element={<MembersPage />} />
      </Route>

      {/* MEMBER AREA */}
      <Route
        path="/member"
        element={
          <ProtectedRoute allowedRoles={["member"]}>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* 👇 Default route when visiting /member */}
        <Route index element={<Navigate to="dashboard" replace />} />
        {/* Member dashboard */}
        {/* <Route path="dashboard" element={<MemberDashboard />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
