import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route
          path="/login"
          element={<div>SyncBoard Login</div>}
        />

        <Route
          path="/register"
          element={<div>SyncBoard Register</div>}
        />

        <Route
          path="/dashboard"
          element={<div>SyncBoard Dashboard</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;