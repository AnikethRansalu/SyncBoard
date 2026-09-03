import Column from "./Column";

function Board({ tasks, onStatusChange }) {
  return (
    <div className="board">
      <Column
        title="To Do"
        tasks={tasks.todo}
        onStatusChange={onStatusChange}
      />

      <Column
        title="Doing"
        tasks={tasks.doing}
        onStatusChange={onStatusChange}
      />

      <Column
        title="Done"
        tasks={tasks.done}
        onStatusChange={onStatusChange}
      />
    </div>
  );
}

export default Board;