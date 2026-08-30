import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div>
          <h2>Profile</h2>
          <p>Manage your personal SyncBoard profile.</p>
        </div>

        <button type="button" className="save-profile-button">
          Save Changes
        </button>
      </div>

      <div className="profile-layout">
        <section className="profile-card profile-summary">
          <div className="profile-avatar">A</div>

          <h3>Aniketh</h3>
          <p>aniketh@syncboard.com</p>

          <span className="profile-role">Project Manager</span>
        </section>

        <section className="profile-card profile-form-card">
          <h3>Personal Information</h3>

          <p className="profile-card-description">
            Update the information associated with your account.
          </p>

          <form className="profile-form">
            <div className="profile-form-row">
              <div className="profile-field">
                <label htmlFor="profile-name">Full name</label>

                <input
                  id="profile-name"
                  type="text"
                  defaultValue="Aniketh"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="profile-email">Email address</label>

                <input
                  id="profile-email"
                  type="email"
                  defaultValue="aniketh@syncboard.com"
                />
              </div>
            </div>

            <div className="profile-field">
              <label htmlFor="profile-role">Role</label>

              <input
                id="profile-role"
                type="text"
                defaultValue="Project Manager"
              />
            </div>

            <div className="profile-field">
              <label htmlFor="profile-bio">About</label>

              <textarea
                id="profile-bio"
                rows="5"
                defaultValue="Project manager and SyncBoard workspace administrator."
              ></textarea>
            </div>

            <button type="submit" className="mobile-save-button">
              Save Changes
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Profile;