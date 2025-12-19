import { useState } from "react";
import { todoList } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ConfirmDialog from "./ConfirmDialog";

const TodoModal = () => {
  const [tasks, setTasks] = useLocalStorage("Todo-List", todoList);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openEditMode = (todo) => {
    setFormData({
      name: todo.name,
      description: todo.description,
      dueDate: todo.dueDate,
    });
    setEditingId(todo.id);
    setIsCreating(true);
  };

  const getTodayString = () => {
    return new Date().toISOString().split("T")[0];
  };

  const saveTask = (e) => {
    e.preventDefault();

    //ตรวจสอบวัน vailidation date
    if (formData.dueDate < getTodayString()) {
      alert("ไม่สามารถกำหนดได้");
      return;
    }

    if (editingId) {
      // โหมดแก้ไข (Edit)
      setTasks(
        tasks.map((t) => (t.id === editingId ? { ...t, ...formData } : t))
      );
    } else {
      // โหมดเพิ่ม (Add)
      const newTask = { ...formData, id: Date.now(), completed: false };
      setTasks([...tasks, newTask]);
    }

    // Reset ทุกอย่างกลับค่าเดิม
    closeForm();
  };

  const closeForm = () => {
    setFormData({ name: "", description: "", dueDate: "" });
    setEditingId(null);
    setIsCreating(false);
  };

  //const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const deleteTask = (id) => {
    const remainTasks = tasks.filter((task) => task.id != id);

    if (remainTasks.length === 0) {
      setTasks(todoList);
    } else {
      setTasks(todoList);
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const openDeleteDialog = (id) => {
    setTargetId(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteTask(targetId);
    setIsConfirmOpen(false);
    setTargetId(null);
  };

  // --- Render ---
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
        {!isCreating ? (
          <section>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
                <p className="text-gray-500 text-sm">
                  You have {tasks.filter((item) => !item.completed).length}{" "}
                  tasks left!
                </p>
              </div>
              <button
                onClick={() => setIsCreating(true)}
                className="bg-secondary border-2 border-black px-6 py-2 font-bold hover:bg-primary transition-colors"
              >
                Add Task
              </button>
            </div>

            <div className="space-y-4 max-h-120 overflow-y-auto pr-2">
              {tasks.map((item) => (
                <TodoItem
                  key={item.id}
                  todo={item}
                  onDelete={() => openDeleteDialog(item.id)}
                  onToggle={toggleComplete}
                  onEdit={openEditMode}
                />
              ))}
              <ConfirmDialog
                isOpen={isConfirmOpen}
                title="Are you sure?"
                message="Do you want delete item."
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsConfirmOpen(false)}
              />
            </div>
          </section>
        ) : (
          <section className="animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">
                {editingId ? "Edit Task" : "Add Task"}
              </h1>
              <button
                onClick={() => setIsCreating(false)}
                className=" bg-accent border-2 border-black px-6 py-2 font-bold hover:bg-muted transition-colors"
              >
                Backward
              </button>
            </div>

            <form onSubmit={saveTask} className="space-y-6">
              <div>
                <label className="block font-bold">Title *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-2 border-black p-3 outline-none"
                  placeholder="Enter your todo name..."
                  required
                />
              </div>
              <div>
                <label className="block font-bold">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border-2 border-black p-3 outline-none"
                  rows="3"
                  placeholder="Description"
                />
              </div>
              <div>
                <label className="block font-bold">Due Date *</label>
                <input
                  type="date"
                  name="dueDate"
                  min={getTodayString()}
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  className="w-full border-2 border-black p-3 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary border-2 border-black py-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all"
              >
                {editingId ? "Update Task" : "Add Task"}
              </button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
};

export default TodoModal;
