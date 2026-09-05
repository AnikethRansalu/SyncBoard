import { useEffect, useState } from "react";
import "./Members.css";

function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/members"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }

      const data = await response.json();

      setMembers(data);
      setError("");
    } catch (error) {
      console.error("Error fetching members:", error);
      setError("Unable to load team members. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onlineMembers = members.filter(
    (member) => member.status === "Online"
  ).length;

  const developers = members.filter(
    (member) =>
      member.role.includes("Developer") ||
      member.role.includes("Engineer")
  ).length;

  return (
    <div className="members-page">
      <div className="members-header">
        <div>
          <h2>Team Members</h2>
          <p>
            View and manage members of your SyncBoard workspace.
          </p>
        </div>

        <button
          type="button"
          className="invite-member-button"
        >
          + Invite Member
        </button>
      </div>

      {loading && <p>Loading team members...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <div className="members-summary">
            <div className="member-summary-card">
              <span>Total Members</span>
              <strong>{members.length}</strong>
            </div>

            <div className="member-summary-card">
              <span>Online</span>
              <strong>{onlineMembers}</strong>
            </div>

            <div className="member-summary-card">
              <span>Developers</span>
              <strong>{developers}</strong>
            </div>
          </div>

          <section className="members-section">
            <div className="members-section-header">
              <div>
                <h3>Workspace Members</h3>
                <p>
                  People currently working on this workspace.
                </p>
              </div>

              <input
                type="search"
                className="member-search"
                placeholder="Search members..."
              />
            </div>

            <div className="members-grid">
              {members.map((member) => (
                <article
                  className="member-card"
                  key={member.id}
                >
                  <div className="member-card-top">
                    <div className="member-avatar">
                      {member.initials}
                    </div>

                    <span
                      className={`member-status ${member.status.toLowerCase()}`}
                    >
                      {member.status}
                    </span>
                  </div>

                  <h4>{member.name}</h4>

                  <p className="member-role">
                    {member.role}
                  </p>

                  <p className="member-email">
                    {member.email}
                  </p>

                  <button
                    type="button"
                    className="view-member-button"
                  >
                    View Profile
                  </button>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Members;