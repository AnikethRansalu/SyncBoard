import "./Register.css";

function Register() {
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

        <form>
          <label>Full name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          <button type="button">Create account</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;