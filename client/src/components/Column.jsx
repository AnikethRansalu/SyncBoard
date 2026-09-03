import TaskCard from "./TaskCard";

function Column({ title, tasks, onStatusChange }) {
  const columnClass =
    title === "To Do"
      ? "todo-column"
      : title === "Doing"
      ? "doing-column"
      : "done-column";

  return (
    <section className={`column ${columnClass}`}>
      <div className="column-header">
        <h3>{title}</h3>
        <span>{tasks.length}</span>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>

      <button type="button" className="column-add">
        + Add task
      </button>
    </section>
  );
}

export default Column;