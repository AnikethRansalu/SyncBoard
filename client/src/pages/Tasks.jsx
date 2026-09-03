import { useEffect, useState } from "react";
import Board from "../components/Board";
import "./Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    projectId: 1,
    assignedTo: "",
    dueDate: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/tasks"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();

      const formattedTasks = {
        todo: data.filter((task) => task.status === "To Do"),
        doing: data.filter(
          (task) => task.status === "In Progress"
        ),
        done: data.filter(
          (task) => task.status === "Completed"
        ),
      };

      setTasks(formattedTasks);
      setError("");
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Unable to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewTask({
      ...newTask,
      [name]: name === "projectId" ? Number(value) : value,
    });
  };

  const handleCreateTask = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      setNewTask({
        title: "",
        description: "",
        priority: "Medium",
        status: "To Do",
        projectId: 1,
        assignedTo: "",
        dueDate: "",
      });

      setShowForm(false);

      await fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
      setError("Unable to create task. Please try again.");
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update task status");
      }

      await fetchTasks();
    } catch (error) {
      console.error("Error updating task status:", error);
      setError("Unable to update task status. Please try again.");
    }
  };

  return (
    <div className="tasks-page">
      <main className="tasks-container">
        <div className="tasks-title">
          <div>
            <h2>Task Board</h2>
            <p>View and manage your team's tasks and progress.</p>
          </div>

          <button
            type="button"
            className="tasks-add-button"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Task
          </button>
        </div>

        {showForm && (
          <div className="create-task-form">
            <h3>Create New Task</h3>

            <form onSubmit={handleCreateTask}>
              <input
                type="text"
                name="title"
                placeholder="Task title"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />

              <textarea
                name="description"
                placeholder="Task description"
                value={newTask.description}
                onChange={handleInputChange}
                required
              />

              <div className="task-form-row">
                <select
                  name="priority"
                  value={newTask.priority}
                  onChange={handleInputChange}
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>

                <select
                  name="status"
                  value={newTask.status}
                  onChange={handleInputChange}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="task-form-row">
                <input
                  type="text"
                  name="assignedTo"
                  placeholder="Assigned member"
                  value={newTask.assignedTo}
                  onChange={handleInputChange}
                />

                <input
                  type="date"
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit">
                Create Task
              </button>
            </form>
          </div>
        )}

        {loading && <p>Loading tasks...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <Board
            tasks={tasks}
            onStatusChange={handleStatusChange}
          />
        )}
      </main>
    </div>
  );
}

export default Tasks;