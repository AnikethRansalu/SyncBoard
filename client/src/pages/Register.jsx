import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage("Unable to connect to the server");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>SyncBoard</h1>

        <p className="register-tagline">
          Collaborate. Organize. Get things done.
        </p>

        <h2>Create an account</h2>

        <p className="register-subtitle">
          Join your team workspace and start collaborating.
        </p>

        {message && <p className="form-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="register-name">Full name</label>

          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="register-email">Email address</label>

          <input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="register-password">Password</label>

          <input
            id="register-password"
            type="password"
            placeholder="Create a password"
            required
            minLength="6"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <label htmlFor="register-confirm-password">
            Confirm password
          </label>

          <input
            id="register-confirm-password"
            type="password"
            placeholder="Confirm your password"
            required
            minLength="6"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <button type="submit">Create account</button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;