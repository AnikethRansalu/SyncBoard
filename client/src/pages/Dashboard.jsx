import Board from "../components/Board";
import "./Dashboard.css";

function Dashboard() {
  const tasks = {
    todo: [
      {
        id: 1,
        title: "Design login page",
        description: "Create the initial SyncBoard login interface.",
        priority: "High",
      },
      {
        id: 2,
        title: "Plan database structure",
        description: "Prepare the initial data model.",
        priority: "Medium",
      },
    ],

    doing: [
      {
        id: 3,
        title: "Build dashboard UI",
        description: "Create the main Kanban board.",
        priority: "High",
      },
    ],

    done: [
      {
        id: 4,
        title: "Set up React project",
        description: "Initialize React application with Vite.",
        priority: "Low",
      },
    ],
  };

  return (
    <div className="dashboard">
      <main className="board-container">
        <div className="board-title">
          <div>
            <h2>Project Board</h2>
            <p>Manage your team's tasks and progress.</p>
          </div>

          <button type="button" className="add-task-button">
            + Add Task
          </button>
        </div>

        <Board tasks={tasks} />
      </main>
    </div>
  );
}

export default Dashboard;