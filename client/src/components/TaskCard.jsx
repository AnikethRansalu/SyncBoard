function TaskCard({ task }) {
  return (
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
  );
}

export default TaskCard;