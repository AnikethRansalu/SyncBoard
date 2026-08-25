import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
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
          {/* Existing page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Pages that will be implemented by other members */}
          <Route
            path="/projects"
            element={<PagePlaceholder title="Projects" />}
          />

          <Route
            path="/tasks"
            element={<PagePlaceholder title="Tasks" />}
          />

          <Route
            path="/task/:id"
            element={<PagePlaceholder title="Task Details" />}
          />

          <Route
            path="/members"
            element={<PagePlaceholder title="Team Members" />}
          />

          <Route
            path="/profile"
            element={<PagePlaceholder title="Profile" />}
          />

          <Route
            path="/settings"
            element={<PagePlaceholder title="Settings" />}
          />
        </Route>

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function PagePlaceholder({ title }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          border: "1px solid #e1e6ef",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2
          style={{
            margin: "0 0 10px",
            color: "#1e293b",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            margin: 0,
            color: "#64748b",
          }}
        >
          This page will be implemented as part of the SyncBoard project.
        </p>
      </div>
    </div>
  );
}

export default App;