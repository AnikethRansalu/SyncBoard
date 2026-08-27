import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <Link to={`/task/${task.id}`} className="task-card-link">
      <div className="task-card">
        <div className="task-top">
          <h4>{task.title}</h4>

          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
        </div>

        <p>{task.description}</p>

        <div className="task-footer">
          <span>👤 Member</span>
          <span>⋮</span>
        </div>
      </div>
    </Link>
  );
}

export default TaskCard;