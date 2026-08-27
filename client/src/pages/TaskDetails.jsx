import { Link, useParams } from "react-router-dom";
import "./TaskDetails.css";

function TaskDetails() {
  const { id } = useParams();

  const tasks = {
    1: {
      title: "Design login page",
      description: "Create the initial SyncBoard login interface.",
      priority: "High",
      status: "To Do",
      assignee: "Team Member",
      project: "SyncBoard",
      created: "August 25, 2026",
    },
    2: {
      title: "Plan database structure",
      description: "Prepare the initial data model.",
      priority: "Medium",
      status: "To Do",
      assignee: "Team Member",
      project: "SyncBoard",
      created: "August 25, 2026",
    },
    3: {
      title: "Build dashboard UI",
      description: "Create the main Kanban board.",
      priority: "High",
      status: "Doing",
      assignee: "Team Member",
      project: "SyncBoard",
      created: "August 25, 2026",
    },
    4: {
      title: "Set up React project",
      description: "Initialize React application with Vite.",
      priority: "Low",
      status: "Done",
      assignee: "Team Member",
      project: "SyncBoard",
      created: "August 24, 2026",
    },
  };

  const task = tasks[id];

  if (!task) {
    return (
      <div className="task-details-page">
        <div className="task-not-found">
          <h2>Task not found</h2>
          <p>
            The task you are looking for does not exist or has been removed.
          </p>

          <Link to="/dashboard" className="back-button">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="task-details-page">
      <div className="task-details-header">
        <div>
          <Link to="/dashboard" className="back-link">
            ← Back to Dashboard
          </Link>

          <h2>Task Details</h2>
          <p>View information about this task.</p>
        </div>

        <button type="button" className="edit-task-button">
          Edit Task
        </button>
      </div>

      <div className="task-details-card">
        <div className="task-details-title-row">
          <div>
            <span className="details-label">TASK</span>
            <h1>{task.title}</h1>
          </div>

          <span
            className={`details-priority ${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </span>
        </div>

        <div className="details-divider"></div>

        <div className="task-description-section">
          <h3>Description</h3>
          <p>{task.description}</p>
        </div>

        <div className="task-information">
          <div className="information-item">
            <span className="information-label">Status</span>
            <strong>{task.status}</strong>
          </div>

          <div className="information-item">
            <span className="information-label">Assignee</span>
            <strong>👤 {task.assignee}</strong>
          </div>

          <div className="information-item">
            <span className="information-label">Project</span>
            <strong>{task.project}</strong>
          </div>

          <div className="information-item">
            <span className="information-label">Created</span>
            <strong>{task.created}</strong>
          </div>
        </div>

        <div className="task-actions">
          <button type="button" className="secondary-task-button">
            Move Task
          </button>

          <button type="button" className="primary-task-button">
            Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;