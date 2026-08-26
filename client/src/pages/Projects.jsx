import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "SyncBoard",
      description: "Main team task management workspace.",
      status: "Active",
      progress: 65,
      tasks: 12,
      members: 5,
    },
    {
      id: 2,
      name: "Website Redesign",
      description: "Redesign and improve the company website.",
      status: "Active",
      progress: 40,
      tasks: 8,
      members: 4,
    },
    {
      id: 3,
      name: "Mobile Application",
      description: "Plan the next version of the mobile application.",
      status: "Planning",
      progress: 15,
      tasks: 5,
      members: 3,
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div>
          <h2>Projects</h2>
          <p>Manage your team's projects and workspaces.</p>
        </div>

        <button type="button" className="create-project-button">
          + New Project
        </button>
      </div>

      <div className="workspace-summary">
        <div className="summary-card">
          <span className="summary-label">Total Projects</span>
          <strong>{projects.length}</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">Active Projects</span>
          <strong>
            {projects.filter((project) => project.status === "Active").length}
          </strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">Team Members</span>
          <strong>5</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">Total Tasks</span>
          <strong>
            {projects.reduce((total, project) => total + project.tasks, 0)}
          </strong>
        </div>
      </div>

      <section className="projects-section">
        <div className="section-heading">
          <div>
            <h3>Project Workspace</h3>
            <p>View and manage your team's current projects.</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-header">
                <div className="project-icon">
                  {project.name.charAt(0)}
                </div>

                <span
                  className={`project-status ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>

              <h4>{project.name}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-progress">
                <div className="progress-label">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-bar"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="project-meta">
                <span>Tasks: {project.tasks}</span>
                <span>Members: {project.members}</span>
              </div>

              <button type="button" className="view-project-button">
                Open Workspace
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;