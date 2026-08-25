import "./Login.css";

function Login() {
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

        <form className="login-form">
          <label>Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/register">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default Login;