import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <h1>SyncBoard</h1>
          <p>Collaborate. Organize. Get things done.</p>
        </div>

        <h2>Welcome back</h2>

        <p className="login-subtitle">
          Sign in to continue to your team workspace.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>

          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="login-password">Password</label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            required
            minLength="6"
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot-password">Forgot password?</a>
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;