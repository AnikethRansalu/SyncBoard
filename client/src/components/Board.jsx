import Column from "./Column";

function Board({ tasks }) {
  return (
    <div className="board">
      <Column title="To Do" tasks={tasks.todo} />

      <Column title="Doing" tasks={tasks.doing} />

      <Column title="Done" tasks={tasks.done} />
    </div>
  );
}

export default Board;