import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

function Layout() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="brand">
          <Link to="/dashboard" className="brand-link">
            <h1>SyncBoard</h1>
            <span>Team Task Board</span>
          </Link>
        </div>

        <nav className="main-navigation">
          <Link to="/dashboard" className={isActive("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/projects" className={isActive("/projects")}>
            Projects
          </Link>

          <Link to="/tasks" className={isActive("/tasks")}>
            Tasks
          </Link>

          <Link to="/members" className={isActive("/members")}>
            Members
          </Link>

          <Link to="/profile" className={isActive("/profile")}>
            Profile
          </Link>

          <Link to="/settings" className={isActive("/settings")}>
            Settings
          </Link>

          <Link to="/login" className="logout-link">
            Logout
          </Link>
        </nav>
      </header>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;