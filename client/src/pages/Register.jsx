import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
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

        <form onSubmit={handleSubmit}>
          <label htmlFor="register-name">Full name</label>

          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="register-email">Email address</label>

          <input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="register-password">Password</label>

          <input
            id="register-password"
            type="password"
            placeholder="Create a password"
            required
            minLength="6"
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