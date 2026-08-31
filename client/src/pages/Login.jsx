import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      setMessage("Login successful!");

      // Store logged-in user temporarily
      localStorage.setItem("user", JSON.stringify(data.user));

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      setMessage("Unable to connect to the server");
    }
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

        {message && <p className="form-message">{message}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>

          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="login-password">Password</label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            required
            minLength="6"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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