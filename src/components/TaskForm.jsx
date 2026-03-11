import { useState } from "react";

export default function TaskForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ title, description });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
