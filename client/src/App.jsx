import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Members from "./pages/Members";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main application layout */}
        <Route element={<Layout />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Projects / Workspace */}
          <Route path="/projects" element={<Projects />} />

          {/* Task Board */}
          <Route path="/tasks" element={<Tasks />} />

          {/* Task Details */}
          <Route path="/task/:id" element={<TaskDetails />} />

          {/* Team Members */}
          <Route path="/members" element={<Members />} />

          {/* Profile */}
          <Route path="/profile" element={<Profile />} />

          {/* Settings */}
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;