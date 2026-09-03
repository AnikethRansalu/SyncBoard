import { Link } from "react-router-dom";

function TaskCard({ task, onStatusChange }) {
  const handleStatusChange = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onStatusChange(task.id, event.target.value);
  };

  return (
    <div className="task-card-wrapper">
      <Link to={`/task/${task.id}`} className="task-card-link">
        <div className="task-card">
          <div className="task-top">
            <h4>{task.title}</h4>

            <span
              className={`priority ${
                task.priority
                  ? task.priority.toLowerCase()
                  : "medium"
              }`}
            >
              {task.priority || "Medium"}
            </span>
          </div>

          <p>{task.description}</p>

          <div className="task-footer">
            <span>
              👤 {task.assignedTo || "Unassigned"}
            </span>

            <span>⋮</span>
          </div>
        </div>
      </Link>

      <div className="task-status-control">
        <label htmlFor={`status-${task.id}`}>
          Status
        </label>

        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={handleStatusChange}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}

export default TaskCard;