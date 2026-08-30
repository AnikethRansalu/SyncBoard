import "./Members.css";

function Members() {
  const members = [
    {
      id: 1,
      name: "Aniketh",
      email: "aniketh@syncboard.com",
      role: "Project Manager",
      status: "Online",
      initials: "A",
    },
    {
      id: 2,
      name: "Dinindu",
      email: "dinindu@syncboard.com",
      role: "Frontend Developer",
      status: "Online",
      initials: "D",
    },
    {
      id: 3,
      name: "Dewmina",
      email: "dewmina@syncboard.com",
      role: "Backend Developer",
      status: "Away",
      initials: "D",
    },
    {
      id: 4,
      name: "Chanithu",
      email: "chanithu@syncboard.com",
      role: "UI/UX Designer",
      status: "Online",
      initials: "C",
    },
    {
      id: 5,
      name: "Chamidu",
      email: "chamidu@syncboard.com",
      role: "QA Engineer",
      status: "Offline",
      initials: "C",
    },
  ];

  return (
    <div className="members-page">
      <div className="members-header">
        <div>
          <h2>Team Members</h2>
          <p>View and manage members of your SyncBoard workspace.</p>
        </div>

        <button type="button" className="invite-member-button">
          + Invite Member
        </button>
      </div>

      <div className="members-summary">
        <div className="member-summary-card">
          <span>Total Members</span>
          <strong>{members.length}</strong>
        </div>

        <div className="member-summary-card">
          <span>Online</span>
          <strong>
            {members.filter((member) => member.status === "Online").length}
          </strong>
        </div>

        <div className="member-summary-card">
          <span>Developers</span>
          <strong>
            {
              members.filter(
                (member) =>
                  member.role.includes("Developer") ||
                  member.role.includes("Engineer")
              ).length
            }
          </strong>
        </div>
      </div>

      <section className="members-section">
        <div className="members-section-header">
          <div>
            <h3>Workspace Members</h3>
            <p>People currently working on this workspace.</p>
          </div>

          <input
            type="search"
            className="member-search"
            placeholder="Search members..."
          />
        </div>

        <div className="members-grid">
          {members.map((member) => (
            <article className="member-card" key={member.id}>
              <div className="member-card-top">
                <div className="member-avatar">{member.initials}</div>

                <span
                  className={`member-status ${member.status.toLowerCase()}`}
                >
                  {member.status}
                </span>
              </div>

              <h4>{member.name}</h4>

              <p className="member-role">{member.role}</p>

              <p className="member-email">{member.email}</p>

              <button type="button" className="view-member-button">
                View Profile
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Members;