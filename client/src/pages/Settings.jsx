import "./Settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your SyncBoard preferences.</p>
        </div>

        <button type="button" className="save-settings-button">
          Save Settings
        </button>
      </div>

      <div className="settings-layout">
        <section className="settings-card">
          <div className="settings-card-header">
            <div>
              <h3>Notifications</h3>
              <p>Choose how SyncBoard keeps you informed.</p>
            </div>
          </div>

          <div className="setting-option">
            <div>
              <strong>Task updates</strong>
              <span>Receive notifications when tasks change.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-option">
            <div>
              <strong>Team activity</strong>
              <span>Get updates about activity from your teammates.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-option">
            <div>
              <strong>Email notifications</strong>
              <span>Receive important workspace updates by email.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-card-header">
            <div>
              <h3>Workspace</h3>
              <p>Manage your workspace preferences.</p>
            </div>
          </div>

          <div className="settings-field">
            <label htmlFor="workspace-name">Workspace name</label>
            <input
              id="workspace-name"
              type="text"
              defaultValue="SyncBoard Workspace"
            />
          </div>

          <div className="settings-field">
            <label htmlFor="workspace-description">
              Workspace description
            </label>

            <textarea
              id="workspace-description"
              rows="4"
              defaultValue="Team task management workspace."
            ></textarea>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-card-header">
            <div>
              <h3>Appearance</h3>
              <p>Customize how your workspace looks.</p>
            </div>
          </div>

          <div className="settings-field">
            <label htmlFor="theme">Theme</label>

            <select id="theme" defaultValue="light">
              <option value="light">Light</option>
              <option value="system">System Default</option>
            </select>
          </div>

          <div className="settings-field">
            <label htmlFor="language">Language</label>

            <select id="language" defaultValue="english">
              <option value="english">English</option>
            </select>
          </div>
        </section>
      </div>

      <button type="button" className="mobile-save-settings-button">
        Save Settings
      </button>
    </div>
  );
}

export default Settings;