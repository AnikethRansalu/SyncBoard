import { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    status: "Planning",
    progress: 0,
    members: 1,
    dueDate: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/projects"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();

      setProjects(data);
      setError("");
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Unable to load projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewProject({
      ...newProject,
      [name]:
        name === "progress" || name === "members"
          ? Number(value)
          : value,
    });
  };

  const resetForm = () => {
    setNewProject({
      name: "",
      description: "",
      status: "Planning",
      progress: 0,
      members: 1,
      dueDate: "",
    });

    setEditingProject(null);
    setShowForm(false);
  };

  const handleCreateProject = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const data = await response.json();

      setProjects([...projects, data.project]);
      setError("");
      resetForm();
    } catch (error) {
      console.error("Error creating project:", error);
      setError("Unable to create project. Please try again.");
    }
  };

  const handleEditClick = (project) => {
    setEditingProject(project);

    setNewProject({
      name: project.name,
      description: project.description,
      status: project.status,
      progress: project.progress,
      members: project.members,
      dueDate: project.dueDate || "",
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleUpdateProject = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/projects/${editingProject.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      const data = await response.json();

      setProjects(
        projects.map((project) =>
          project.id === editingProject.id
            ? data.project
            : project
        )
      );

      setError("");
      resetForm();
    } catch (error) {
      console.error("Error updating project:", error);
      setError("Unable to update project. Please try again.");
    }
  };

  const handleDeleteProject = async (projectId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/projects/${projectId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      setProjects(
        projects.filter(
          (project) => project.id !== projectId
        )
      );

      setError("");
    } catch (error) {
      console.error("Error deleting project:", error);
      setError("Unable to delete project. Please try again.");
    }
  };

  const handleFormSubmit = (event) => {
    if (editingProject) {
      handleUpdateProject(event);
    } else {
      handleCreateProject(event);
    }
  };

  const activeProjects = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  const totalProgress =
    projects.length > 0
      ? Math.round(
          projects.reduce(
            (total, project) => total + project.progress,
            0
          ) / projects.length
        )
      : 0;

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div>
          <h2>Projects</h2>
          <p>Manage your team's projects and workspaces.</p>
        </div>

        <button
          type="button"
          className="create-project-button"
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
              setEditingProject(null);
            }
          }}
        >
          {showForm ? "Close Form" : "+ New Project"}
        </button>
      </div>

      {showForm && (
        <div className="create-project-form-container">
          <h3>
            {editingProject
              ? "Edit Project"
              : "Create New Project"}
          </h3>

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="project-name">
                Project Name
              </label>

              <input
                id="project-name"
                type="text"
                name="name"
                placeholder="Enter project name"
                value={newProject.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="project-description">
                Project Description
              </label>

              <textarea
                id="project-description"
                name="description"
                placeholder="Describe the project"
                value={newProject.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="project-status">
                  Status
                </label>

                <select
                  id="project-status"
                  name="status"
                  value={newProject.status}
                  onChange={handleInputChange}
                >
                  <option value="Planning">
                    Planning
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="project-progress">
                  Progress (%)
                </label>

                <input
                  id="project-progress"
                  type="number"
                  name="progress"
                  min="0"
                  max="100"
                  value={newProject.progress}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="project-members">
                  Number of Members
                </label>

                <input
                  id="project-members"
                  type="number"
                  name="members"
                  min="1"
                  value={newProject.members}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="project-due-date">
                  Due Date
                </label>

                <input
                  id="project-due-date"
                  type="date"
                  name="dueDate"
                  value={newProject.dueDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit">
              {editingProject
                ? "Update Project"
                : "Create Project"}
            </button>
          </form>
        </div>
      )}

      <div className="workspace-summary">
        <div className="summary-card">
          <span className="summary-label">
            Total Projects
          </span>

          <strong>{projects.length}</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">
            Active Projects
          </span>

          <strong>{activeProjects}</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">
            Team Members
          </span>

          <strong>5</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">
            Total Progress
          </span>

          <strong>{totalProgress}%</strong>
        </div>
      </div>

      <section className="projects-section">
        <div className="section-heading">
          <div>
            <h3>Project Workspace</h3>
            <p>
              View and manage your team's current projects.
            </p>
          </div>
        </div>

        {loading && <p>Loading projects...</p>}

        {error && (
          <p className="project-error">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >
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
                      style={{
                        width: `${project.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="project-meta">
                  <span>
                    Members: {project.members}
                  </span>

                  <span>
                    Due: {project.dueDate || "Not set"}
                  </span>
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="edit-project-button"
                    onClick={() =>
                      handleEditClick(project)
                    }
                  >
                    Edit Project
                  </button>

                  <button
                    type="button"
                    className="delete-project-button"
                    onClick={() =>
                      handleDeleteProject(project.id)
                    }
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    className="view-project-button"
                  >
                    Open Workspace
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Projects;