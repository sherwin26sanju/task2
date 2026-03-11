import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/tasks";
import { Link } from "react-router-dom";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getTasks()
      .then(res => setTasks(res.data))
      .catch((error) => { setError(error + "Failed to load tasks")})
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t._id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <h1>Tasks</h1>
      <Link to="/create" className="link">Create Task</Link>

      <div className="tasks">
      {tasks.map(task => (
        <div key={task._id} className="task">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="buttons">
            <Link className="link" to={`/edit/${task._id}`}>Edit</Link>
            <button className="link" onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
