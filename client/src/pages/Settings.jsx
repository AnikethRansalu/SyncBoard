import { useEffect, useState } from "react";
import "./Settings.css";

function Settings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/settings/1"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch settings");
      }

      const data = await response.json();

      setSettings(data);
      setError("");
    } catch (error) {
      console.error("Error fetching settings:", error);
      setError("Unable to load settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setSettings({
      ...settings,
      [field]: value,
    });

    setMessage("");
  };

  const saveSettings = async (event) => {
    if (event) {
      event.preventDefault();
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/settings/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(settings),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save settings");
      }

      const data = await response.json();

      setSettings(data.settings);
      setMessage("Settings saved successfully.");
      setError("");
    } catch (error) {
      console.error("Error saving settings:", error);
      setError("Unable to save settings. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="settings-page">
        <p>Loading settings...</p>
      </div>
    );
  }

  if (error && !settings) {
    return (
      <div className="settings-page">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your SyncBoard preferences.</p>
        </div>

        <button
          type="button"
          className="save-settings-button"
          onClick={saveSettings}
        >
          Save Settings
        </button>
      </div>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}

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
              <input
                type="checkbox"
                checked={settings.taskReminders}
                onChange={(event) =>
                  handleChange(
                    "taskReminders",
                    event.target.checked
                  )
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-option">
            <div>
              <strong>Team activity</strong>
              <span>Get updates about activity from your teammates.</span>
            </div>

            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.projectUpdates}
                onChange={(event) =>
                  handleChange(
                    "projectUpdates",
                    event.target.checked
                  )
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-option">
            <div>
              <strong>Email notifications</strong>
              <span>Receive important workspace updates by email.</span>
            </div>

            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(event) =>
                  handleChange(
                    "emailNotifications",
                    event.target.checked
                  )
                }
              />
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
            <label htmlFor="workspace-name">
              Workspace name
            </label>

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

            <select
              id="theme"
              value={settings.theme}
              onChange={(event) =>
                handleChange("theme", event.target.value)
              }
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          <div className="settings-field">
            <label htmlFor="language">Language</label>

            <select
              id="language"
              value={settings.language}
              onChange={(event) =>
                handleChange(
                  "language",
                  event.target.value
                )
              }
            >
              <option value="English">English</option>
            </select>
          </div>
        </section>
      </div>

      <button
        type="button"
        className="mobile-save-settings-button"
        onClick={saveSettings}
      >
        Save Settings
      </button>
    </div>
  );
}

export default Settings;