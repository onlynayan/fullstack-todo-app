import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: "", completed: false });
  const [editId, setEditId] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/tasks/");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value === "true" ? true : value === "false" ? false : value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) return;
    if (editId) {
      await axios.put(`http://127.0.0.1:8000/api/tasks/${editId}/`, formData);
      setEditId(null);
    } else {
      await axios.post("http://127.0.0.1:8000/api/tasks/", formData);
    }
    setFormData({ title: "", completed: false });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setFormData({ title: task.title, completed: task.completed });
    setEditId(task.id);
  };

  const handleToggle = async (task) => {
    await axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#58a6ff]">To-Do List</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add or edit task..."
            className="flex-1 p-3 rounded bg-[#161b22] border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
          />
          <select
            name="completed"
            value={formData.completed}
            onChange={handleChange}
            className="p-3 rounded bg-[#161b22] border border-[#30363d] text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
          >
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
          </select>
          <button
            onClick={handleSubmit}
            className="bg-[#58a6ff] px-6 py-3 rounded text-white font-semibold hover:scale-105 transition-transform duration-200"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-[#161b22] p-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <div onClick={() => handleToggle(task)} className="cursor-pointer flex-1">
                <div className={`text-xl font-medium ${task.completed ? "text-[#a3be8c]" : "text-[#bf616a]"}`}>
                  {task.title}
                </div>
                <div className="text-sm text-gray-400">
                  {task.completed ? "✅ Completed" : "🕗 Pending"}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(task)}
                  className="px-4 py-2 bg-yellow-500 rounded text-sm hover:scale-105 transition-transform duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-4 py-2 bg-red-500 rounded text-sm hover:scale-105 transition-transform duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;