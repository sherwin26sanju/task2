import TaskForm from "../components/TaskForm";
import { createTask } from "../api/tasks";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await createTask(data);
    navigate("/");
  };

  return (
    <div className="edit">
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}
