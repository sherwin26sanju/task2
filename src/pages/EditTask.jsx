import { useEffect, useState } from "react";
import { getTask, updateTask } from "../api/tasks";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTask(id).then(res => setTask(res.data));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  const handleUpdate = async (data) => {
    await updateTask(id, data);
    navigate("/");
  };

  return (
    <div className="edit">
      <h1>Edit Task</h1>
      <TaskForm initialData={task} onSubmit={handleUpdate} />
    </div>
  );
}
