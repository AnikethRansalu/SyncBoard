import TaskCard from "./TaskCard";

function Column({ title, tasks }) {
  return (
    <section className="column">
      <div className="column-header">
        <h3>{title}</h3>
        <span>{tasks.length}</span>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <button type="button" className="column-add">
        + Add task
      </button>
    </section>
  );
}

export default Column;