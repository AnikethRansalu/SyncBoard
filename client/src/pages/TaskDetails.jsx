import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./TaskDetails.css";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);

  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    assignedTo: "",
    dueDate: "",
  });

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`
      );

      if (!response.ok) {
        throw new Error("Task not found");
      }

      const data = await response.json();

      setTask(data);

      setEditTask({
        title: data.title || "",
        description: data.description || "",
        priority: data.priority || "Medium",
        status: data.status || "To Do",
        assignedTo: data.assignedTo || "",
        dueDate: data.dueDate || "",
      });
    } catch (error) {
      console.error("Error fetching task:", error);
      setError(
        "The task you are looking for does not exist or has been removed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;

    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  const handleUpdateTask = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editTask),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const data = await response.json();

      setTask(data.task);
      setEditing(false);
      setError("");

      alert("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Unable to update task. Please try again.");
    }
  };

  const handleDeleteTask = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      alert("Task deleted successfully!");

      navigate("/tasks");
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Unable to delete task. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="task-details-page">
        <div className="task-not-found">
          <h2>Loading task...</h2>
          <p>Please wait while the task information is loaded.</p>
        </div>
      </div>
    );
  }

  if (error || !task) {
    return (
      <div className="task-details-page">
        <div className="task-not-found">
          <h2>Task not found</h2>

          <p>
            {error ||
              "The task you are looking for does not exist or has been removed."}
          </p>

          <Link to="/tasks" className="back-button">
            ← Back to Tasks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="task-details-page">
      <div className="task-details-header">
        <div>
          <Link to="/tasks" className="back-link">
            ← Back to Tasks
          </Link>

          <h2>Task Details</h2>
          <p>View information about this task.</p>
        </div>

        <button
          type="button"
          className="edit-task-button"
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Cancel Edit" : "Edit Task"}
        </button>
      </div>

      {editing ? (
        <div className="task-details-card">
          <h2>Edit Task</h2>

          <form onSubmit={handleUpdateTask}>
            <div className="edit-form-group">
              <label>Task Title</label>

              <input
                type="text"
                name="title"
                value={editTask.title}
                onChange={handleEditInputChange}
                required
              />
            </div>

            <div className="edit-form-group">
              <label>Description</label>

              <textarea
                name="description"
                value={editTask.description}
                onChange={handleEditInputChange}
                required
              />
            </div>

            <div className="edit-form-row">
              <div className="edit-form-group">
                <label>Priority</label>

                <select
                  name="priority"
                  value={editTask.priority}
                  onChange={handleEditInputChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="edit-form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={editTask.status}
                  onChange={handleEditInputChange}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="edit-form-row">
              <div className="edit-form-group">
                <label>Assigned Member</label>

                <input
                  type="text"
                  name="assignedTo"
                  value={editTask.assignedTo}
                  onChange={handleEditInputChange}
                />
              </div>

              <div className="edit-form-group">
                <label>Due Date</label>

                <input
                  type="date"
                  name="dueDate"
                  value={editTask.dueDate}
                  onChange={handleEditInputChange}
                />
              </div>
            </div>

            <div className="task-actions">
              <button
                type="button"
                className="secondary-task-button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-task-button"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="task-details-card">
          <div className="task-details-title-row">
            <div>
              <span className="details-label">TASK</span>
              <h1>{task.title}</h1>
            </div>

            <span
              className={`details-priority ${
                task.priority
                  ? task.priority.toLowerCase()
                  : "medium"
              }`}
            >
              {task.priority || "Medium"}
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
              <strong>
                👤 {task.assignedTo || "Unassigned"}
              </strong>
            </div>

            <div className="information-item">
              <span className="information-label">Project</span>
              <strong>
                Project {task.projectId}
              </strong>
            </div>

            <div className="information-item">
              <span className="information-label">Due Date</span>
              <strong>
                {task.dueDate || "No due date"}
              </strong>
            </div>
          </div>

          <div className="task-actions">
            <button
              type="button"
              className="secondary-task-button"
              onClick={() => setEditing(true)}
            >
              Edit Task
            </button>

            <button
              type="button"
              className="primary-task-button"
              onClick={() => {
                setEditTask({
                  ...editTask,
                  status: "Completed",
                });
                setEditing(true);
              }}
            >
              Mark as Complete
            </button>

            <button
              type="button"
              className="delete-task-button"
              onClick={handleDeleteTask}
            >
              Delete Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskDetails;