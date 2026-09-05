import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/profiles/1"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();

      setProfile(data);

      setFormData({
        name: data.name || "",
        email: data.email || "",
        role: data.role || "",
        bio: data.bio || "",
      });

      setError("");
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Unable to load profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setProfile({
      ...profile,
      ...formData,
    });

    setMessage("Profile changes saved successfully.");
  };

  if (loading) {
    return (
      <div className="profile-page">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="profile-page">
        <p>{error || "Profile not found."}</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div>
          <h2>Profile</h2>
          <p>Manage your personal SyncBoard profile.</p>
        </div>

        <button
          type="button"
          className="save-profile-button"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </div>

      {message && <p>{message}</p>}

      <div className="profile-layout">
        <section className="profile-card profile-summary">
          <div className="profile-avatar">
            {profile.name.charAt(0)}
          </div>

          <h3>{profile.name}</h3>
          <p>{profile.email}</p>

          <span className="profile-role">
            {profile.role}
          </span>
        </section>

        <section className="profile-card profile-form-card">
          <h3>Personal Information</h3>

          <p className="profile-card-description">
            Update the information associated with your account.
          </p>

          <form
            className="profile-form"
            onSubmit={handleSubmit}
          >
            <div className="profile-form-row">
              <div className="profile-field">
                <label htmlFor="profile-name">
                  Full name
                </label>

                <input
                  id="profile-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="profile-field">
                <label htmlFor="profile-email">
                  Email address
                </label>

                <input
                  id="profile-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="profile-field">
              <label htmlFor="profile-role">
                Role
              </label>

              <input
                id="profile-role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            <div className="profile-field">
              <label htmlFor="profile-bio">
                About
              </label>

              <textarea
                id="profile-bio"
                name="bio"
                rows="5"
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mobile-save-button"
            >
              Save Changes
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Profile;